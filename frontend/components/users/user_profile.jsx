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
      console.log(this.props.currentUser.username);
      this.user = this.props.fetchUser(this.props.currentUser.username);
    }
    // console.log(this.user);
  }

  render () {
    return (<div>
     <h1>Hello {this.props.currentUser.username}</h1>
     
      </div>);
  }
}

export default UserProfile;
