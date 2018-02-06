import React from 'react';
import { Link, Route } from 'react-router-dom';

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
    if (user) {
    return (<div className = "user-background">
     <img className="user-cover" src={user.cover_url}/>
     <img className="user-photo" src={user.img_url}/>
      </div>);
    } else {
      return (<div>
      </div>);
    }
  }
}

export default UserProfile;
