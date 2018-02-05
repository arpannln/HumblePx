import React from 'react';
import { connect } from 'react-redux';
import { logout, removeAllErrors  } from '../../actions/session_actions';
import { changePage } from '../../actions/page_actions';
import Welcome from './welcome';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  removeAllErrors: () => dispatch(removeAllErrors()),
  changePage: () => dispatch(changePage()),
});

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(Welcome)));
