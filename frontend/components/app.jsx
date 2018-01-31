import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session/session_form_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <WelcomeContainer/>

    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>
  </div>
);

export default App;
