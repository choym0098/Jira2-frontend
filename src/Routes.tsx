import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserBoard from './pages/UserBoard'


export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/board/:boardId' exact component={UserBoard} />
      </Switch>
    </Router>
  );
}
