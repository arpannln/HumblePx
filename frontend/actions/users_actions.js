import * as APIUtil from "../util/users_api_util";
import {receiveUserErrors} from "./session_actions";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});





export const fetchUser = (username) => dispatch => (
  APIUtil.fetchUser(username).then(user => (dispatch(receiveUser(user))),
      err => (dispatch(receiveUserErrors(err.responseJSON))))
);

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
);
