import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pizzaChangeSize, pizzaChangeIngredients} from '../actions';
import {pizzaCreateRemotely} from '../actions/api.js';
import images from '../img/index';
import './pizza-new.container.css';

class PizzaEdit extends Component {


    render() {
        const {user, ingredients, sizes} = this.props;
        const pizza = this.props.pizzaToEdit;
        console.log(pizza);
        // const pizzaId = +this.props.location.pathname.split('/').pop();

        return (
            <div className="pizza-edit">
                <div className="pizza-edit__image-container">
                    <img src={images[pizza.imageURL]}
                         alt={pizza.title}
                         className={`pizza-edit__image pizza-edit__image_${pizza.size}`}/>
                </div>
                <div className="pizza-edit__details">
                    <input type="text"
                           className="pizza-edit__title"
                           defaultValue={pizza.title}/>
                    {sizes.map(size => (
                        <div key={`div-${size}`}>
                        <input type="radio"
                               id={`radio_${size}`}
                               key={size}
                               name="size"
                               className="pizza-edit__size"
                               value={size}
                               defaultChecked={size === pizza.size}
                               onChange={this.handlerSizeChange(size)}/>
                            <label htmlFor={`radio_${size}`}>{size}</label>
                        </div>
                        ))
                    }
                    {ingredients.map(ingredient => (
                        <div key={`div_${ingredient.id}`} className="pizza-edit__ingredient ingredient">
                            {pizza.ingredients[ingredient.id] === true
                                ? (<input type="checkbox"
                                          id={`input_${ingredient.id}`}
                                          key={`input-checked_${ingredient.id}`}
                                          defaultChecked
                                          onChange={this.handlerIngredientToggle(ingredient.id)}/>)
                                : (<input type="checkbox"
                                          id={`input_${ingredient.id}`}
                                          key={`input_${ingredient.id}`}
                                          onChange={this.handlerIngredientToggle(ingredient.id)}/>)
                            }
                            <label htmlFor={`input_${ingredient.id}`}
                                   key={`label_${ingredient.id}`}>
                                <img   src={ingredient.imageURL}
                                       key={`img_${ingredient.id}`}
                                       alt={ingredient.title}
                                       className="ingredient__img"/>
                                <h6    key={`title_${ingredient.id}`}
                                       className="ingredient__title">{ingredient.title}</h6>
                                <p     key={`description_${ingredient.id}`}
                                       className="ingredient__description">{ingredient.description}</p>
                                <span  key={`price_${ingredient.id}`}
                                       className="ingredient__description">{ingredient.price}</span>
                            </label>
                        </div>
                        ))
                    }
                    <span className="pizza-edit__price">{pizza.price}</span>
                    <Link to="/dashboard">
                        <button className="pizza-edit__save"
                                onClick={this.handlerOnSaveChanges}>Save changes
                        </button>
                    </Link>
                    <Link to="/dashboard">
                        <button className="pizza-edit__cancel">Cancel
                        </button>
                    </Link>
                </div>
            </div>
        );
    }


    handlerSizeChange = size => () => {
        const {dispatch} = this.props;
        dispatch(pizzaChangeSize(size));
    };

    handlerIngredientToggle = ingredientId => () => {
        const {pizzaToEdit, dispatch} = this.props;
        pizzaToEdit.ingredients[ingredientId] = !pizzaToEdit.ingredients[ingredientId];
        dispatch(pizzaChangeIngredients(pizzaToEdit.ingredients));
    };

    handlerOnSaveChanges = e => {
        // e.preventDefault();
        console.log("click");
        const {pizzaToEdit, dispatch} = this.props;
        const pizza = {...pizzaToEdit,
                        title: document.querySelector('.pizza-edit__title').value};
        dispatch(pizzaCreateRemotely(pizza));
    };
}

const mapStateToProps = (state) => {
    const {user, pizzaToEdit, ingredients, sizes, dispatch} = state;
    return {user, pizzaToEdit, ingredients, sizes, dispatch};
};

export default connect(mapStateToProps)(PizzaEdit);