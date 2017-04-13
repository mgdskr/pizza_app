import * as types from './types';

export const showLoginForm = () => ({
    type: types.SHOW_LOGIN_FORM
});

export const closeLoginForm = () => ({
    type: types.CLOSE_LOGIN_FORM
});

export const logInSuccess = dataFromServer => ({
    type: types.LOG_IN_SUCCESS,
    dataFromServer
});

export const logInFailure = dataFromServer => ({
    type: types.LOG_IN_FAILURE
});

export const logOutLocally = () => ({
    type: types.LOG_OUT
});





export const pizzaEdit = id => ({
    type: types.PIZZA_EDIT,
    id
});

export const pizzaChangeSize = size => ({
    type: types.PIZZA_CHANGE_SIZE,
    size
});

export const pizzaChangeIngredients = ingredients => ({
    type: types.PIZZA_CHANGE_INGREDIENTS,
    ingredients
});


export const addNewPizza = () => ({
    type: types.ADD_NEW_PIZZA
});




export const pizzaDeleteLocally = id => ({
    type: types.PIZZA_DELETE_LOCALLY,
    id
});

export const pizzaUpdateLocally = (id, pizza) => ({
    type: types.PIZZA_UPDATE_LOCALLY,
    id,
    pizza
});

export const pizzaCreateLocally = pizza => ({
    type: types.PIZZA_CREATE_LOCALLY,
    pizza
});
