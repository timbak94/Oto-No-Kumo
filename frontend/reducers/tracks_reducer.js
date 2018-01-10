import { RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_SINGLE_USER } from '../actions/user_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const tracksReducer = (oldstate = { }, action ) => {
  Object.freeze(oldstate);
  let newState = merge({}, oldstate);
  switch(action.type) {
    case RECEIVE_TRACK:
      let newTrack = {[action.track.id]: { track: action.track, comments: []}};
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
    case RECEIVE_COMMENTS:
      if (action.comments.comments.length > 0) {
        let newComments = [];
        action.comments.comments.forEach((comment) => {
            newComments.push(comment.id);
        });
        let newerState = merge({}, newState);
        let newCommentTrack = newerState[action.comments.comments[0].track_id];

        newComments.forEach((el) => {
          if (!newCommentTrack.comments.includes(el) ){
            newCommentTrack.comments.push(el);
          }
        });


        newCommentTrack = {[newCommentTrack.track.id]: newCommentTrack};
        newState = merge({}, newState, newCommentTrack);
        return newState;
      }
      return newState;
    default:
      return oldstate;
  }
};



export default tracksReducer;
