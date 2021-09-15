import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <>
        <div className="">
          <div className="">
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} type="guest" />
            <Route exact path="/signup" component={Signup} type="guest" />
            <ProtectedRoute exact path="/swinfo/:id" component={} type="private"/>
            <ProtectedRoute exact path="/swinfo/:id/:detail" component={} type="private"/>
          </div>
        </div>
      </>
    </Switch>
  </Router>
);

export default App;