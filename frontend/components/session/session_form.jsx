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

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead!</Link>;
    } else {
      return <Link to="/login">login instead</Link>;
    }
  }

  render() {
    return (
      <div className="Session-form">
          <form onSubmit={this.handleSubmit} className="login-form">
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
          <label className="errors">
            {
              this.props.errors.map((err, idx) => <ul key={idx}>{err}</ul>)
            }
          </label>
          <br/>
          {this.navLink()}
          <br/>
          <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
