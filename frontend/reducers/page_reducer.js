import {
  RECEIVE_PAGE
} from '../actions/page_actions';

const pageReducer = (state = "discover", action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PAGE:
      return action.page;
    default:
      return state;
  }
};

export default pageReducer;
