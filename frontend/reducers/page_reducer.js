import {
  RECEIVE_PAGE
} from '../actions/page_actions';

const pageReducer = (state = true, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PAGE:
      return !state;
    default:
      return state;
  }
};

export default pageReducer;
