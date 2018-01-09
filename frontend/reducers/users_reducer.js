import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (oldstate = {}, action ) => {
  Object.freeze(oldstate);
  let newState = merge({}, oldstate);
  switch(action.type) {
    case RECEIVE_SINGLE_USER:
      let newUser = {[action.user.id]: action.user};
      return merge({}, oldstate, newUser);
    default:
      return oldstate;
  }
};



export default usersReducer;
