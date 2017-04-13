import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {showLoginForm, addNewPizza} from '../actions';
import {logOutRequest} from '../actions/api';
import './main-header.container.css';
import LoginForm from './login-form.container';

class MainHeader extends Component {
    render() {
        const {loginFormIsVisible, loggedIn, user} = this.props;
        return (
                <header className="page-header">
                    <nav className="main-nav">
                        {loggedIn
                            ? <ul className="main-nav__menu menu">
                                <li className="menu__item menu__item_greeting">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu__item menu__item_greeting">Hello, {user.login}</li>
                                <li className="menu__item" onClick={this.handlerOnLogout}>
                                    <Link to="/">Exit</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="/pizza-new" onClick={this.handlerAddNewPizza}>
                                        + Add pizza</Link>
                                </li>
                            </ul>
                            : <ul className="main-nav__menu menu">
                                <li className="menu__item menu__item_greeting">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu__item" onClick={this.handlerOnLogin}>Login</li>
                            </ul>
                        }
                    </nav>
                    { loginFormIsVisible
                         ? <LoginForm/>
                         : null
                    }

                </header>
        );
    }

    handlerOnLogin = () => {
        const {dispatch} = this.props;
        dispatch(showLoginForm());
    };

    handlerOnLogout = () => {
        const {dispatch} = this.props;
        dispatch(logOutRequest());
    };

    handlerAddNewPizza = () => {
        const {dispatch} = this.props;
        dispatch(addNewPizza());
    };
}

const mapStateToProps = (state) => {
    const {loginFormIsVisible, loggedIn, user, dispatch} = state;
    return {
        loginFormIsVisible,
        loggedIn,
        user,
        dispatch
    }
};

export default connect(mapStateToProps)(MainHeader);