import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login/Components/Login';
import Register from './auth/Register/Components/Register';
import { PrivateRoute } from './custom-route/Components/PrivateRoute';
import DashBoard from './DashBoard/Components/DashBoard';
import { BlockedLoggedInRoute } from './custom-route/Components/BlockedLoggedInRoute';
import ForgotPassword from './auth/Forgot-Password/Components/ForgotPassword';
import ResetPassword from './auth/Reset-Password/Components/ResetPassword';
import Home from './Home-page/Components/Home-page/Home';
import BecomeASeller from './Become-A-Seller/Components/BecomeASeller';
import Testtt from './testt/Testtt';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/become-a-seller' component={BecomeASeller} />
          <PrivateRoute path={'/dashboard'} component={DashBoard} />
          <BlockedLoggedInRoute exact path={'/login'} component={Login} />
          <BlockedLoggedInRoute exact path={'/register'} component={Register} />
          <Route exact path={'/forgot-password'} component={ForgotPassword} />
          <Route exact path={'/reset-password'} component={ResetPassword} />
          <Route exact path={'/tesst/'} component={Testtt} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
