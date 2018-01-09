export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
import * as APIUtil from '../util/comment_api_util';

export const fetchComments = (track_id) => (dispatch) => (

    APIUtil.fetchComments(track_id).then( comments => (
      dispatch(recieveComments(comments))
    ))
);

export const recieveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};
