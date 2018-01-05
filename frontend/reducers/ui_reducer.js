import { RECEIVE_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const uiReducer = (oldstate = {}, action ) => {
  Object.freeze(oldstate);
  let newState = merge({}, oldstate);
  switch(action.type) {
    case RECEIVE_TRACK:
      return {"trackShow": action.track.id};
    default:
      return oldstate;
  }
};

export default uiReducer;
