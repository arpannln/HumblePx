import React from 'react';
import { Link } from 'react-router-dom';
import PhotosHomepageContainer from '../photos/photos_homepage_container';

const sessionLinks = (removeAllErrors) => (
  <div>
  <div className="welcome-page">
   <div className="welcome-banner">
    <h1 className="logo">Humble</h1>
    <nav className="login-signup">
      <Link className="login-button" to="/login" onClick={removeAllErrors}>Login</Link> <br/>
      <Link className="signup-button" to="/signup" onClick={removeAllErrors}>Sign up!</Link>
    </nav>
   </div>
  </div>
  <h1 className="welcome-greeting">Sit Down, <br/> &nbsp; &nbsp;&nbsp;
    Explore<p className="welcome-greeting-logo">Humble...</p></h1>
  </div>
);
// {props.location.pathname === '/' ? <Link className="welcome-signup-button" to="/signup">Join Us</Link> : null}


const personalWelcome = (currentUser, logout) => (
  <div className="home-page">
    <h1 className="nav-bar">
      <h1 className="logo">Humble</h1>
      <button className="welcome-logout" onClick={logout}>Log Out</button>
    </h1>
    <bold className="welcome-statement">
      Moments To Discover...
    </bold>
    <PhotosHomepageContainer/>
  </div>
);


const Welcome = ({currentUser, logout, removeAllErrors}) => (
  currentUser ? personalWelcome(currentUser, logout) : sessionLinks(removeAllErrors)
);

export default Welcome;
