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
    this.handleDemo = this.handleDemo.bind(this);
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

    // if (this.props.sessionErrors.length) {
    //   this.props.removeAllErrors();
    // }
  }

  componentDidUpdate() {
    // if (this.props.history.location.pathname !== this.currentPath){
    //   this.currentPath = this.props.history.location.pathname;
    //   this.props.removeAllErrors();
    // }

  }
  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.sessionErrors.length) {
      this.props.removeAllErrors();
    }
    this.props.processForm({user}).then(this.setState({
      username: '',
      password: ''
    }));


  }

  handleDemo(e) {
    e.preventDefault();
    const user = {username: "DemoUser", password: "password"};
    this.props.login({user});
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
      <div className="session-form">
          <form onSubmit={this.handleSubmit} className="login-form">
          <Link className="close-form" to="/">X</Link>
        <div className="session-box">
          <h1 className="session-label">{
          this.props.formType === 'Login' ? 'Welcome Back!' : 'Join Us'}</h1>
          <label className="errors">
            {
              <ul>{this.props.sessionErrors ? this.props.sessionErrors[0] : ""}</ul>
            }
          </label>
          <label className="username">Username: &nbsp; &nbsp;
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login"
            />
          </label>
          <br/>
          <label className="password">Password: &nbsp; &nbsp;
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login"
              />
          </label>
          <br/>
          <h3>{this.navLink()}</h3>
          <br/>
          <input className="submit-button" type="submit" value={this.props.formType.toUpperCase()}/>
          <input className="demo-button" type="submit" value="DEMO" onClick={this.handleDemo}/>
        </div>
          </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
