import {
  RECEIVE_USER_ERRORS,
  RECEIVE_CURRENT_USER,
  REMOVE_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      console.log(action.errors);
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;
    case REMOVE_ERRORS:
      return null;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
