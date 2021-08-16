import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login/Components/Login';
import Register from './auth/Register/Components/Register';
import { PrivateRoute } from './custom-route/Components/PrivateRoute';
import DashBoard from './DashBoard/Components/DashBoard';
import { BlockedLoggedInRoute } from './custom-route/Components/BlockedLoggedInRoute';
import ForgotPassword from './auth/Forgot-Password/Components/ForgotPassword';
import ResetPassword from './auth/Reset-Password/Components/ResetPassword';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path={'/'} component={DashBoard} />
          <BlockedLoggedInRoute exact path={'/login'} component={Login} />
          <BlockedLoggedInRoute exact path={'/register'} component={Register} />
          <Route exact path={'/forgot-password'} component={ForgotPassword} />
          <Route exact path={'/reset-password'} component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
