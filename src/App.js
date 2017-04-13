import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import MainHeader  from './containers/main-header.container';
import Boilerplate from './containers/boilerplate.container';
import Dashboard   from './containers/dashboard.container';
import LoginForm   from './containers/login-form.container';
import PizzaEdit   from './containers/pizza-edit.container';
import PizzaNew    from './containers/pizza-new.container';

class App extends Component {
    render() {
        const {loggedIn} = this.props;

        return (
            <Router>
                <div className="App">
                    <MainHeader/>
                    <Route path="/" component={Boilerplate}></Route>
                    <Route path="/login" component={LoginForm}></Route>
                    <PrivateRoute path="/dashboard"
                                  component={Dashboard}
                                  loggedIn={loggedIn}></PrivateRoute>
                    <PrivateRoute path="/pizza/:pizzaId"
                                  component={PizzaEdit}
                                  loggedIn={loggedIn}></PrivateRoute>
                    <PrivateRoute path="/pizza-new"
                                  component={PizzaNew}
                                  loggedIn={loggedIn}></PrivateRoute>

                    <footer className="page-footer"></footer>
                </div>
            </Router>
        );
    }
}
//
// {/*<main className="page-main">*/}
//     {/*{loggedIn? <Dashboard/> : null}*/}
// {/*</main>*/}

const PrivateRoute = ({ component, loggedIn, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            loggedIn ? (
                    React.createElement(component, props)
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}/>
                )
        )}/>
    );
};

const mapStateToProps = state => {
    const {loggedIn} = state;
    return {loggedIn};
};

export default connect(mapStateToProps)(App);