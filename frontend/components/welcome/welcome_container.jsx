import React from 'react';
import { connect } from 'react-redux';
import { logout, removeAllErrors  } from '../../actions/session_actions';
import Welcome from './welcome';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  removeAllErrors: () => dispatch(removeAllErrors())
});

export default (connect(mapStateToProps, mapDispatchToProps)(Welcome));
