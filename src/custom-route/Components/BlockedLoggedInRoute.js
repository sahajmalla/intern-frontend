import { Route, Redirect } from "react-router-dom";
import { isLogin } from '../../utils/helpers'

export const BlockedLoggedInRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Redirect to="/" />
                : <Component {...props} />

        )} />
    );
};