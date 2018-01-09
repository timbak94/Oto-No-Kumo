import { RECEIVE_CURRENT_SONG,
  PLAY_SONG,
  STOP_SONG,
  PAUSE_SONG } from '../actions/player_actions';
import merge from 'lodash/merge';

const playerReducer = (oldState = {currentSong: null, status: "playing"}, action ) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, {currentSong: action.song, status: "playing"});
      return newState;
    case PLAY_SONG:
      newState = merge({}, oldState, {status: "playing"});
      return newState;
    case STOP_SONG:
      newState = merge({}, oldState, {status: "stopped"});
      return newState;
    case PAUSE_SONG:
      console.log(newState);
      console.log(oldState);
      newState = merge({}, oldState, {status: "paused"});
      console.log(newState);
      return newState;
    default:
      return oldState;
  }
};



export default playerReducer;
