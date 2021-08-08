import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from '../../utils/helpers'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

