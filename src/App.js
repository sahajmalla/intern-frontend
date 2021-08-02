import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
