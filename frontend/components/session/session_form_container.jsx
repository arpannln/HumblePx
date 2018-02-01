import { connect } from 'react-redux';
import {login, logout, signup, removeAllErrors} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  sessionErrors: state.errors.sessionErrors
});

const mapDispatchToProps = (dispatch, OwnProps) => {
  const formType = OwnProps.location.pathname === '/login' ? 'Login' : 'Signup';
  const processForm = formType === 'Login' ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    removeAllErrors: () => dispatch(removeAllErrors()),
    formType,
    login: user => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
