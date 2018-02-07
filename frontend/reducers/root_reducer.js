import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import photosReducer from './photos_reducer';
import usersReducer from './users_reducer';
import pageReducer from './page_reducer';
import likesReducer from './likes_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  photos: photosReducer,
  users: usersReducer,
  page: pageReducer,
  likes: likesReducer,
});

export default rootReducer;
