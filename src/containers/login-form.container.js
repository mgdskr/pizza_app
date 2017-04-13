import React , {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {closeLoginForm} from '../actions/index.js';
import {logInRequest, signUpRequest, logInRequestRemotely} from '../actions/api.js';
import './login-form.container.css';

class LoginForm extends Component {
    render() {
        const {loginFormIsVisible, logInError, loggedIn} = this.props;

        if (loggedIn) {
            return (
                <Redirect to="/dashboard"/>
            )
        }

        return (
            <form className="login-form" method="POST"
                 onClick={this.handlerOnModalClose}>
                <div className="login-form__content">
                    <span className="login-form__close">X</span>
                    <span className="login-form__error-message"
                          style={{display: `${logInError ? "inline" : "none"}`}}
                        >No such user or password is incorrect {logInError}</span>
                    <input className="login-form__input login-form__input_login"
                           type="text"
                           placeholder="login"
                           required/>
                    <input className="login-form__input login-form__input_email"
                           type="text"
                           placeholder="email"
                           required/>
                    <input className="login-form__input login-form__input_password"
                           type="password"
                           placeholder="password"
                           required/>
                    <button className="login-form__submit"
                            onClick={this.handlerOnLogin}>
                        Enter
                    </button>
                    <button className="login-form__submit"
                            onClick={this.handlerOnSignUp}>
                        Register
                    </button>
                </div>
            </form>

        );
    }

    handlerOnLogin = e => {
        e.preventDefault();
        const {dispatch} = this.props;
        const email = document.querySelector('.login-form__input_login');
        const password = document.querySelector('.login-form__input_password');
        const emailValue = email.value;
        const passwordValue = password.value;
        email.value = "";
        password.value ="";
        dispatch(logInRequestRemotely(emailValue, passwordValue));
    };

    handlerOnSignUp = e => {
        e.preventDefault();
        const {dispatch} = this.props;
        const email = document.querySelector('.login-form__input_login');
        const password = document.querySelector('.login-form__input_password');
        const emailValue = email.value;
        const passwordValue = password.value;
        email.value = "";
        password.value ="";
        dispatch(signUpRequest(emailValue, passwordValue));
    };

    handlerOnModalClose = (e) => {
        const {dispatch} = this.props;
        let targetClassName = e.target.className;
        if (targetClassName === "login-form" || targetClassName === "login-form__close" ) {
            dispatch(closeLoginForm());
        }
    };
}

const mapStateToProps = (state) => {
    const {dispatch, loginFormIsVisible, logInError, loggedIn} = state;
    return {dispatch, loginFormIsVisible, logInError, loggedIn};
};

export default connect(mapStateToProps)(LoginForm);