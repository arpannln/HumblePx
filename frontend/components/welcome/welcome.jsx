import React from 'react';
import { Link, Route } from 'react-router-dom';
import PhotosHomepageContainer from '../photos/photos_homepage_container';
import UserProfileContainer from '../users/user_profile_container';
import PhotoUploadFormContainer from '../photos/photo_upload_form_container';
const sessionLinks = (removeAllErrors) => (
  <div>
  <div className="welcome-page">
   <div className="welcome-banner">
    <h1 className="logo">Humble</h1>
    <nav className="login-signup">
      <Link className="login-button" to="/login" onClick={removeAllErrors}>Login</Link> <br/>
      <Link className="signup-button" to="/signup" onClick={removeAllErrors}><h3 className="signup-text">Sign up!</h3></Link>
    </nav>
   </div>
  </div>
  <h1 className="welcome-greeting">Sit Down, <br/> &nbsp; &nbsp;&nbsp;
    Explore<p className="welcome-greeting-logo">Humble...</p></h1>
  </div>
);
// {props.location.pathname === '/' ? <Link className="welcome-signup-button" to="/signup">Join Us</Link> : null}


const personalWelcome = (currentUser, logout, page, changePage) => (
  <div className="home-page">
    {page ?
      (<div>
        <h1 className="nav-bar">
          <h1 className="logo">Humble</h1>
          <div className="links">
            <h2 className="profile-button" onClick={changePage}>Profile</h2>
            <button className="welcome-logout" onClick={logout}>Log Out</button>
          </div>
        </h1>
        <bold className="welcome-statement">
          <p>Catch</p>&nbsp;a City...
        </bold>
        <PhotosHomepageContainer/>
      </div>) :
      (<div>
        <h1 className="nav-bar">
          <h1 className="logo">Humble<button className="discover-button" onClick={changePage}>Discover</button></h1>
          <div>
            <Link className="upload-button" to="/upload"> Upload </Link>
            <h1 className="discover-welcome-logout" onClick={logout}>Log Out</h1>
          </div>
        </h1>
        <Route exact path="/upload" component={PhotoUploadFormContainer} />
        <UserProfileContainer/>
      </div>)

    }
  </div>
);


const Welcome = ({currentUser, logout, removeAllErrors, page, changePage}) => (
  currentUser ? personalWelcome(currentUser, logout, page, changePage) : sessionLinks(removeAllErrors)
);

export default Welcome;
