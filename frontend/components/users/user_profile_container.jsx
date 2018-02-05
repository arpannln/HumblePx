import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/users_actions';
import UserProfile from './user_profile';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const currentUser = state.session.currenUser;
  const users = state.users;

  return {
    username,
    currentUser,
    users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile));
