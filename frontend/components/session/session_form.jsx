import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.currentPath = undefined;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/'); //redirects to index
    }
  }

  componentDidUpdate() {
    if (this.props.history.location.pathname !== this.currentPath){
      this.currentPath = this.props.history.location.pathname;
      this.props.removeAllErrors();
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'Login') {
      return <Link className="option" to="/signup" onClick={this.props.removeAllErrors}>New User? Sign Up</Link>;
    } else {
      return <Link className="option" to="/login" onClick={this.props.removeAllErrors}>Registered? Login</Link>;
    }
  }

  render() {
    return (
      <div className="Session-form">
          <form onSubmit={this.handleSubmit} className="login-form">
          <Link className="close-form" to="/">X</Link>
          <h1 className="session-label">{
          this.props.formType === 'Login' ? 'Welcome Back!' : 'Join Us'}</h1>

          <label className="errors">
            {
              <ul>{this.props.errors ? this.props.errors[0] : ""}</ul>
            }
          </label>
          <label className="username">Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login"
            />
          </label>
          <br/>
          <label className="password">Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login"
              />
          </label>
          <br/>
          <h3>{this.navLink()}</h3>
          <br/>
          <input className="submit-button" type="submit" value={this.props.formType}/>
          </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
