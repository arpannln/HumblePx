import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LIKE } from '../actions/likes_actions';

import merge from 'lodash/merge';
const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_LIKE:
      newState.currentUser.liked_photos.push(action.like.photo_id);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
