export const initialState = {};
export const users =  [
    { "id": 1,
        "login": "vasia",
        "password": "123"
    },{
        "id": 2,
        "login": "petia",
        "password": "456"
    }, {
        "id": 3,
        "login": "alexandr.maximenko@gmail.com",
        "password": "admin123"
    }
];

export const ingredients = [
        { "id": 1,
            "title": "mushrooms",
            "description": "delicious white mushrooms",
            "weight": 50,
            "price": 1,
            "imageUrl": "./img/mushrooms.png"
        },
        { "id": 2,
            "title": "mozzarella",
            "description": "delicious buffalo mozzarella",
            "weight": 75,
            "price": 1.5,
            "imageUrl": "./img/mozzarella.png"
        },
        { "id": 3,
            "title": "bacon",
            "description": "delicious bacon",
            "weight": 40,
            "price": 2,
            "imageUrl": "./img/bacon.png"
        },
        { "id": 4,
            "title": "tomatoes",
            "description": "tomatoes",
            "weight": 75,
            "price": 0.5,
            "imageUrl": "./img/tomatoes.png"
        }
];
export const pizzas = [
    {
        "id": 1,
        "userId": 1,
        "title": "margarita",
        "ingredients": [1, 3, 4],
        "size": "small",
        "price": 100,
        "imageURL": "pizza_1"
    }, {
        "id": 2,
        "userId": 2,
        "title": "peperoni",
        "ingredients": [2, 4],
        "size": "medium",
        "price": 120,
        "imageURL": "pizza_2"
    }, {
        "id": 3,
        "userId": 3,
        "title": "bavarska",
        "ingredients": [1, 4],
        "size": "large",
        "price": 150,
        "imageURL": "pizza_3"
    }, {
        "id": 4,
        "userId": 3,
        "title": "4 cheeses",
        "ingredients": [1, 3],
        "size": "small",
        "price": 100,
        "imageURL": "pizza_4"
    }, {
        "id": 5,
        "userId": 2,
        "title": "margarita",
        "ingredients": [3, 4],
        "size": "medium",
        "price": 120,
        "imageURL": "pizza_5"
    }, {
        "id": 6,
        "userId": 1,
        "title": "my own recipe",
        "ingredients": [2, 3, 4],
        "size": "large",
        "price": 150,
        "imageURL": "pizza_6"
    }, {
        "id": 7,
        "userId": 3,
        "title": "seafood pizza",
        "ingredients": [1, 2, 3, 4],
        "size": "small",
        "price": 100,
        "imageURL": "pizza_7"
    }, {
        "id": 8,
        "userId": 3,
        "title": "vegetarian",
        "ingredients": [1, 3],
        "size": "medium",
        "price": 120,
        "imageURL": "pizza_8"
    }, {
        "id": 9,
        "userId": 3,
        "title": "best pizza ever",
        "ingredients": [2, 4],
        "size": "large",
        "price": 150,
        "imageURL": "pizza_9"
    }

];
export const sizes = ["small", "medium", "large"];