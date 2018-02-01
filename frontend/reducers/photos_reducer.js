import { RECEIVE_PHOTOS,
          RECEIVE_PHOTO,
          REMOVE_PHOTO } from '../actions/photos_actions';
import merge from 'lodash/merge';



const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
    case RECEIVE_PHOTO:
    case REMOVE_PHOTO:
    default:
      return state;
  }
};

export default photosReducer;
