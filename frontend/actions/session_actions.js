import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(loggedUser => (dispatch(receiveCurrentUser(loggedUser))),
          err => (dispatch(receiveUserErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(loggedUser => (dispatch(receiveCurrentUser(loggedUser))),
          err => (dispatch(receiveUserErrors(err.responseJSON))))
);

export const removeAllErrors = () => (dispatch) => dispatch(removeErrors());
