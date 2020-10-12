import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserBoard from './pages/UserBoard'
import Header from './components/Header'


export default function Routes() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/board/:boardId' exact component={UserBoard} />
      </Switch>
    </Router>
  );
}
