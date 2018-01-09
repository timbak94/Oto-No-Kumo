import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      action.comments.forEach((el) => {
        let newComment = {[el.id]: el};
        newState = merge({}, newState, newComment);
      });
      return newState;
    default:
      return oldState;
  }
};

export default commentReducer;
