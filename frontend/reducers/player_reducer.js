import { RECEIVE_CURRENT_SONG,
  PLAY_SONG,
  STOP_SONG,
  PAUSE_SONG,
  UPDATE_TIME,
  CLEAR_SEEK,
  SEEK_SONG,
  ADD_PLAYLIST,
  REMOVE_PLAYLIST
 } from '../actions/player_actions';
import merge from 'lodash/merge';

const playerReducer = (oldState = {currentSong: null, status: "null", playlist: [], current: null, remaining: null, seek: null}, action ) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, oldState, {currentSong: action.song, status: "start"});
      return newState;
    case ADD_PLAYLIST:
      newState.playlist.push(action.song);
      return newState;
    case PLAY_SONG:
      newState = merge({}, oldState, {status: "playing"});
      return newState;
    case STOP_SONG:
      newState = merge({}, oldState, {status: "stopped"});
      return newState;
    case PAUSE_SONG:
      newState = merge({}, oldState, {status: "paused"});
      return newState;
    case SEEK_SONG:
      newState = merge({}, oldState, {seek: action.time});
      return newState;
    case CLEAR_SEEK:
      newState = merge({}, oldState, {seek: null});
      return newState;
    case UPDATE_TIME:
      newState = merge({}, oldState, {current: action.current, remaining: action.remaining});
      return newState;


    default:
      return oldState;
  }
};



export default playerReducer;
