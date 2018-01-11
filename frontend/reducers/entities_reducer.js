import { combineReducers } from 'redux';
import tracks from './tracks_reducer';
import users from './users_reducer';
import comments from './comments_reducer';
import charts from './charts_reducer';

export default combineReducers({
  users,
  tracks,
  comments,
  charts
});
