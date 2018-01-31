import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="welcome-page">
   <div className="welcome-banner">
    <h1 className="logo">Humble</h1>
    <nav className="login-signup">
      <Link className="login-button" to="/login">Login</Link> <br/>
      <Link className="signup-button" to="/signup">Sign up!</Link>
    </nav>
   </div>
  </div>

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
