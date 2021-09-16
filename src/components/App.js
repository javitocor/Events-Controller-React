import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import NavBar from './NavBar';
import Home from '../containers/Home';
import TicketsList from '../containers/TicketsList';
import ProtectedRoute from '../containers/ProtectedRoute';
import history from '../history';

const App = () => (
  <Router history={history}>
    <Switch>
      <>
        <div className="">
          <div className="">
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} type="guest" />
            <Route exact path="/signup" component={Signup} type="guest" />
            <ProtectedRoute exact path="/ticketing" component={TicketsList} type="private" />
          </div>
        </div>
      </>
    </Switch>
  </Router>
);

export default App;