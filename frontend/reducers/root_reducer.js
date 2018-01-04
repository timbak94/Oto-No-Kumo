import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import modals from '../modal/modal_reducer'

const rootReducer = combineReducers({
  session,
  errors,
  modals
});

export default rootReducer;
