import { combineReducers } from 'redux';
import tracks from './tracks_reducer';
import users from './users_reducer';

export default combineReducers({
  users,
  tracks
});
