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
      <Link className="login-button" to="/login" onClick={removeAllErrors}>LOGIN</Link> <br/>
      <Link className="signup-button" to="/signup" onClick={removeAllErrors}><h3 className="signup-text">SIGN UP</h3></Link>
    </nav>
   </div>
  </div>
  <h1 className="welcome-greeting animated fadeInLeft">Sit Down, <br/> &nbsp; &nbsp;&nbsp;
    Explore<p className="welcome-greeting-logo">Humble...</p> <br/><br/>
    <p className="last-sentence"> Photograph <span className="cities"> &nbsp; Cities </span> &nbsp; Together </p>
</h1>
  </div>
);
// {props.location.pathname === '/' ? <Link className="welcome-signup-button" to="/signup">Join Us</Link> : null}
// <p className="last-sentence"> Photograph <span className="cities"> Cities </span> Together </p> </h1>


const personalWelcome = (currentUser, logout, page, changePage) => {
  // var myNav = document.getElementById('mynav');
  // window.onscroll = function () {
  //   "use strict";
  //   if (document.body.scrollTop > 300) {
  //     console.log(document.body.scrollTop);
  //     myNav.classList.add("nav-transparent");
  //   }
  //   else {
  //
  //     myNav.classList.remove("nav-transparent");
  //   }
  // };
return (
  <div className="home-page">
    {page ?
      (<div>
        <h1 className="nav-bar" id="mynav">
          <a className="logo logo-disc" href="#top">Humble</a>
          <div className="links">
            <a href="#top" className="profile-button" onClick={changePage}> <img className="nav-user-photo" src={currentUser.img_url}/> &nbsp; </a>
            <button className="welcome-logout" onClick={logout}>LOG OUT</button>
          </div>
        </h1>
        <span className="welcome-statement">
          <p>Catch</p>&nbsp;a City...
        </span>
        <PhotosHomepageContainer/>
      </div>) :
      (<div>
        <h1 className="nav-bar-profile">
          <div>
            <h1 className="logo logo-prof" onClick={changePage}>Humble</h1>
            <button className="discover-button" onClick={changePage}>DISCOVER</button>
          </div>
          <div>
            <Link className="upload-button" to="/upload"> UPLOAD &nbsp; <i className="material-icons">cloud_upload</i></Link>
            <h1 className="discover-welcome-logout" onClick={logout}> <span className="logout-text">LOG OUT</span></h1>
          </div>
        </h1>
        <Route exact path="/upload" component={PhotoUploadFormContainer} />
        <UserProfileContainer/>
      </div>)

    }
  </div> );
};


const Welcome = ({currentUser, logout, removeAllErrors, page, changePage}) => {
  // var myNav = document.getElementById('mynav');
  // window.onscroll = function () {
  //   "use strict";
  //   if (document.body.scrollTop > 300) {
  //     console.log(document.body.scrollTop);
  //     myNav.classList.add("nav-transparent");
  //   }
  //   else {
  //
  //     myNav.classList.remove("nav-transparent");
  //   }
  // };
  return currentUser ? personalWelcome(currentUser, logout, page, changePage) : sessionLinks(removeAllErrors);
};

export default Welcome;
