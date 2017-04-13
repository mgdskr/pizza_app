import * as types from '../actions/types';

// import {initialState} from '../mock-state-data.js';

export const rootReducer = (state = {
    loggedIn: false,
    loginFormIsVisible: false,
    logInError: false}, action) => {
    switch (action.type) {
        case types.SHOW_LOGIN_FORM:
            return {...state, loginFormIsVisible: true};
        case types.CLOSE_LOGIN_FORM:
            return {...state, loginFormIsVisible: false, logInError: false};
        case types.LOG_IN_SUCCESS:
            return {...state,
                    ...action.dataFromServer,
                    loggedIn: true,
                    loginFormIsVisible: false,
                    logInError: false};
        case types.LOG_IN_FAILURE:
            return {...state, logInError: true};
        case types.LOG_OUT:
            return {loggedIn: false, loginFormIsVisible: false};
        // case types.PIZZA_CREATE_LOCALLY:
        //     return {...state, pizzas: [...state.pizzas, action.pizza]};
        case types.PIZZA_EDIT:
            return {...state,
                    pizzaToEdit: state.pizzas.find(pizza => pizza.id === action.id)};
        case types.PIZZA_CHANGE_SIZE:
            return {...state, pizzaToEdit: {...state.pizzaToEdit, size: action.size}};
        case types.PIZZA_CHANGE_INGREDIENTS:
            return {...state, pizzaToEdit: {...state.pizzaToEdit, ingredients: action.ingredients}};
        case types.PIZZA_DELETE_LOCALLY:
            return {...state, pizzas: [...state.pizzas.filter(pizza => pizza.id !== action.id)]};
        case types.PIZZA_UPDATE_LOCALLY:
            return {...state,
                    pizzas: [...state.pizzas.map(pizza => pizza.id === action.id
                                                            ? action.pizza
                                                            : pizza)],
                    pizzaToEdit: []
            };
        case types.ADD_NEW_PIZZA:
            return {...state,
                    pizzaToEdit: {title: "My new pizza",
                                  size: "medium",
                                  price: 0,
                                  ingredients: {1: false,
                                                2: false,
                                                3: false,
                                                4: false},
                                  imageURL: ""
                                }
                    };
        case types.PIZZA_CREATE_LOCALLY:
            return {...state,
                    pizzas: [...state.pizzas, action.pizza]};
        default:
            return state;
    }
};