import React from 'react';
import { Link } from 'react-router-dom';
import PhotosHomepageContainer from '../photos/photos_homepage_container';
import UserProfileContainer from '../users/user_profile_container';
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


const personalWelcome = (currentUser, logout, page) => (
  <div className="home-page">
    <h1 className="nav-bar">
      <h1 className="logo">Humble</h1>
      <button className="welcome-logout" onClick={logout}>Log Out</button>
    </h1>
    {console.log(page)}
    {page === "discover" ?
      (<div>
        <bold className="welcome-statement">
          {currentUser.username} Catch a City...
        </bold>
        <PhotosHomepageContainer/>
      </div>) :
      (<div>
        <UserProfileContainer/>
      </div>)

    }
  </div>
);


const Welcome = ({currentUser, logout, removeAllErrors, page}) => (
  currentUser ? personalWelcome(currentUser, logout, page) : sessionLinks(removeAllErrors)
);

export default Welcome;
