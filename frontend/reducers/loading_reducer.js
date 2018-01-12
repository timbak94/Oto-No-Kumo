import { START_LOADING, STOP_LOADING } from '../actions/loading_actions';
import merge from 'lodash/merge';

const loadingReducer = (oldState = { load: false }, action) => {
  Object.freeze(oldState);
  let newState = oldState;
  switch(action.type) {
    case START_LOADING:
      return { load: true };
    case STOP_LOADING:
      return { load: false };
    default:
      return oldState;
  }
};

export default loadingReducer;
