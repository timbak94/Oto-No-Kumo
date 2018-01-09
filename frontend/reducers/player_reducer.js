import { RECEIVE_CURRENT_SONG,
  PLAY_SONG,
  STOP_SONG,
  PAUSE_SONG,
  UPDATE_TIME
 } from '../actions/player_actions';
import merge from 'lodash/merge';

const playerReducer = (oldState = {currentSong: null, status: "playing", current: null, remaining: null}, action ) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, oldState, {currentSong: action.song, status: "start"});
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
    case UPDATE_TIME:
      newState = merge({}, oldState, {current: action.current, remaining: action.remaining});
      return newState;


    default:
      return oldState;
  }
};



export default playerReducer;
