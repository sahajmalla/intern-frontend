import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login/Components/Login';
import Register from './auth/Register/Components/Register';
import { PrivateRoute } from './custom-route/Components/PrivateRoute';
import DashBoard from './DashBoard/Components/DashBoard';
import { BlockedLoggedInRoute } from './custom-route/Components/BlockedLoggedInRoute';
import ForgotPassword from './auth/Forgot-Password/Components/ForgotPassword';
import ResetPassword from './auth/Reset-Password/Components/ResetPassword';
import Home from './Home-page/Components/Home';
import addProductForm from './product/Add-Product-Form/Components/addProductForm';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <PrivateRoute exact path={'/dashboard'} component={DashBoard} /> */}
          
          <Route exact path={'/'} component={Home} />
          <Route path={'/dashboard'} component={DashBoard} />
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
