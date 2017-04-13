import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class MyComponent extends Component {
    render() {
        const {loggedIn} = this.props;
        if (loggedIn) {
            return (
                <Redirect to="/dashboard"/>
            )
        }

        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    const {dispatch, loggedIn} = state;
    return {dispatch, loggedIn};
};

export default connect(mapStateToProps)(MyComponent);