import { RECEIVE_CHART_TRACKS, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const chartsReducer = (oldState = {Rock:[], Pop:[], "Alternative Rock":[], "Hip Hop & Rap":[], Electronic:[], Jazz:[], Piano:[], Classical:[], Idol:[] }, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_CHART_TRACKS:
      action.tracks.chart_tracks.forEach((track) => {
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
