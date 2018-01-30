import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link> <br/>
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalWelcome = (currentUser, logout) => (
  <h1 className="welcome">
    <h2 className="welcome-name">Welcome, {currentUser.username}!</h2>
    <button className="welcome-logout" onClick={logout}>Log Out</button>
  </h1>
);


const Welcome = ({currentUser, logout}) => (
  currentUser ? personalWelcome(currentUser, logout) : sessionLinks()
);

export default Welcome;
