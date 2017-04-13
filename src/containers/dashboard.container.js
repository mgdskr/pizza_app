import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pizzaDeleteRemotely} from '../actions/api.js';
import {pizzaEdit} from '../actions';

import images from '../img/index';
import './dashboard.container.css';

class Dashboard extends Component {
    render() {
        const {pizzas} = this.props;

        return (
            <div className="dashboard">
                {pizzas
                    ? pizzas.map(pizza => {
                    return (
                        <div key={pizza.id} className="dashboard__item pizza">
                            <button className="pizza__delete"
                                    onClick={this.handlerDelete(pizza.id)}>Delete</button>
                            <figure className="pizza__fig">
                                <Link to={`/pizza/${pizza.id}`}>
                                    <img className="pizza__img"
                                         src={images[pizza.imageURL]}
                                         alt={pizza.title}
                                         onClick={this.handlerEdit(pizza.id)}/>
                                </Link>
                                <figcaption className="pizza__title">{pizza.title}</figcaption>
                                <div className="pizza__details">
                                    <span className="pizza__size">size: {pizza.size}</span>
                                    <span className="pizza__price">price: ${pizza.price}</span>
                                </div>
                            </figure>
                        </div>
                        );
                    })
                    : null
                }
            </div>
        );
    }

    handlerDelete = id => () => {
        const {dispatch} = this.props;
        dispatch(pizzaDeleteRemotely(id));
    };

    handlerEdit = id => () => {
        const {dispatch} = this.props;
        dispatch(pizzaEdit(id));
    };

}

const mapStateToProps = state => {
    const {pizzas, dispatch} = state;
    return {pizzas, dispatch};

};

export default connect(mapStateToProps)(Dashboard);