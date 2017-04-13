import * as firebase from 'firebase';
import {logInSuccess,
        logInFailure,
        logOutLocally,
        pizzaDeleteLocally,
        pizzaUpdateLocally,
        pizzaCreateLocally} from './index';
import {users,
        ingredients,
        pizzas,
        sizes} from '../mock-state-data';

const config = {
    apiKey: "AIzaSyAEKL7s1H34g_P-JLErmkPPea5nCzOCv88",
    authDomain: "pizzaapp-789aa.firebaseapp.com",
    databaseURL: "https://pizzaapp-789aa.firebaseio.com",
    projectId: "pizzaapp-789aa",
    storageBucket: "pizzaapp-789aa.appspot.com",
    messagingSenderId: "731780420610"
};
firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

auth.onAuthStateChanged(firebaseUser => {
    firebaseUser ? console.log(firebaseUser) : console.log("not logged in");
    }
);

export const logInRequestRemotely = (email, password) => dispatch => {
    auth.signInWithEmailAndPassword(email, password)
        // .then(response => console.log(response))
        .then(response => dispatch(fetchDataFromFirebase(email, password)))
        .catch(e => {
            console.log(e.code === 'auth/wrong-password' ? 'Wrong password.' : e.message);
            dispatch(logInFailure());
        });
};

const _fetchData = ingredientsTransformToBoolean => (uid) => dispatch => {
    db.ref(`/${uid}`).once('value')
        .then(snap => snap.val())
        .then(response => {
            const {sizes, ingredients, pizzas} = response;
            const user = response.users.find(user => user.id === uid);


            const dataFromServer = {
                user: {
                    // login,
                    id: user.id
                },
                sizes,
                ingredients,
                pizzas: ingredientsTransformToBoolean(pizzas.filter(pizza => pizza.userId === user.id)) || []
            };
            dispatch(logInSuccess(dataFromServer));
        })
        .catch(e => {console.log(e.message);
                     dispatch(logInFailure());});

};

const _ingredientsTransformToBoolean = (pizzas) => {
    let ingredientsBoolean = {};
    ingredients.forEach(ingredient => ingredientsBoolean[ingredient.id] = false);
    pizzas.map(pizza => {
        let ingredientsModified = {...ingredientsBoolean};
        pizza.ingredients.forEach(ingredientId => ingredientsModified[ingredientId] = true);
        pizza.ingredients = ingredientsModified;
    });
    return pizzas;
};

export const fetchDataFromFirebase = _fetchData(_ingredientsTransformToBoolean);

export const signUpRequest = (email, password) => dispatch => {
    return auth.createUserWithEmailAndPassword(email, password)
                // .then(response => console.log("response", response.uid, response.email))
                .then(response => {db.ref(`/usersNew/${response.uid}`)
                        .set({"group": "default",
                              "email": response.email
                            });
                    console.log("response", response.uid, response.email);

                })
                // .then(response => )
                .then(response => dispatch(fetchDataFromFirebase(response.uid)))
                .catch(e => console.log("Error :", e.message));
};

export const logOutRequest = () => dispatch => {
    auth.signOut()
        .then(response => dispatch(logOutLocally()))
        .catch(e => console.log(e.message));
};









export const pizzaDeleteRemotely = id => {
    //request to server and if success
    return pizzaDeleteLocally(id);
};

export const pizzaUpdateRemotely = (id, pizza) => {
    //request to server and if success
    return pizzaUpdateLocally(id, pizza);
};

export const pizzaCreateRemotely = pizza => {
    //request to server and if success
    return pizzaCreateLocally(pizza);
};