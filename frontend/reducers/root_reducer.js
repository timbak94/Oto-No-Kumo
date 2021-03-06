import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import modals from '../modal/modal_reducer';
import entities from './entities_reducer';
import player from './player_reducer';
import loading from './loading_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  modals,
  player,
  loading
});

export default rootReducer;
