import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login/Components/Login';
import Register from './auth/Register/Components/Register';
import { PrivateRoute } from './custom-route/Components/PrivateRoute';
import DashBoard from './DashBoard/Components/DashBoard';
import { BlockedLoggedInRoute } from './custom-route/Components/BlockedLoggedInRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path={'/'} component={DashBoard} />
          <BlockedLoggedInRoute exact path={'/login'} component={Login} />
          <BlockedLoggedInRoute exact path={'/register'} component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
