import { RECEIVE_CURRENT_SONG,
  PLAY_SONG,
  STOP_SONG,
  PAUSE_SONG } from '../actions/player_actions';
import merge from 'lodash/merge';

const playerReducer = (oldstate = {currentSong: null, status: null}, action ) => {
  Object.freeze(oldstate);
  let newState = merge({}, oldstate);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, {currentSong: action.song, status: "playing"});
      return newState;
    case PLAY_SONG:
      newState = merge({}, {status: "playing"});
      return newState;
    case STOP_SONG:
      newState = merge({}, {status: "stopped"});
      return newState;
    case PAUSE_SONG:
      newState = merge({}, {status: "paused"});
      return newState;
    default:
      return oldstate;
  }
};



export default playerReducer;
