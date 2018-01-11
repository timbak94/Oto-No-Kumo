import { RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const chartsReducer = (oldState = {Rock:[], Pop:[], "Alternative Rock":[], "Hip Hop & Rap":[], Electronic:[], Jazz:[], Piano:[], Classical:[], Idol:[] }, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_TRACK:
      if (!newState[action.track.genre].includes(action.track.id)) {
        newState[action.track.genre].push(action.track.id);
      }
      return newState;
    case RECEIVE_SINGLE_USER:
      action.user.user_tracks.forEach((track) => {
        debugger
        if (!newState[track.genre].includes(track.id)) {
          newState[track.genre].push(track.id);
        }
      });
      return newState;
    default:
      return oldState ;
  }
};

export default chartsReducer;
