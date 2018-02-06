import React from 'react';
import { Link, Route } from 'react-router-dom';
import PhotoShowContainer from '../photos/photo_show_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.username) {
      this.user = this.props.fetchUser(this.props.username);
    } else {
      this.user = this.props.fetchUser(this.props.currentUser.username);
    }
    // console.log(this.user);
  }

  render () {
    const user = this.props.currentUser;
    let photos = [];
    if (this.props.users[user.id]) {
      photos = this.props.users[user.id].photos;
    }
    console.log(photos);
    if (user) {
    return (<div className = "user-background">
     <img className="user-cover" src={user.cover_url}/>
     <h1 className="profile-message"> <p>Share</p> &nbsp;a City...</h1>
     <img className="user-photo" src={user.img_url}/>
     <nav className="profile-tab">Tab to be implemented</nav>
       <div className="profile-all-photos">
         {
           photos.map( photo => (
             <ul key={photo.id} className="profile-photo-container">
               <Link to={`/photos/${photo.id}`}>
                 <img className="profile-single-photo" src={photo.img_url} alt={photo.title}/>
                 <br></br>
               </Link>
               <h3 className="profile-photo-caption">What a cute picture!</h3>
             </ul>
           ))
         }
         <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
       </div>
      </div>);
    } else {
      return (<div>
      </div>);
    }
  }
}

export default UserProfile;
