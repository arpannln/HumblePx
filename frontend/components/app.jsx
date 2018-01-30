import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session/session_form_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
const App = () => (
  <div>
    <h1>P500X</h1>
    <WelcomeContainer/>

    <Route path="/login" component={SessionFormContainer}/>
    <Route path="/signup" component={SessionFormContainer}/>
  </div>
);

export default App;
