import { RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const tracksReducer = (oldstate = {}, action ) => {
  Object.freeze(oldstate);
  let newState = merge({}, oldstate);
  switch(action.type) {
    case RECEIVE_TRACK:
      let newTrack = {[action.track.id]: action.track};
      return merge({}, oldstate, newTrack);
    case REMOVE_TRACK:
      delete newState[action.track.id];
      return newState;
    case RECEIVE_SINGLE_USER:
      action.user.user_tracks.forEach ((el) => {
        let newTrack = {[el.id]: el};
        newState = merge({}, newState, newTrack);
      });
      return newState;
    default:
      return oldstate;
  }
};



export default tracksReducer;
