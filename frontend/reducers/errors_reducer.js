import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import photosErrorsReducer from './photos_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  photosErrors: photosErrorsReducer
});

export default errorsReducer;
