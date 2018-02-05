import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users_actions';
import UserProfile from './user_profile';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const currentUser = state.session.currenUser;
  const users = state.users;
};
