import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (oldstate = _nullUser, action ) => {
  Object.freeze(oldstate);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser};
    default:
      return oldstate;
  }
};

export default sessionReducer;
