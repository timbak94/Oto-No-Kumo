export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
import * as APIUtil from '../util/comment_api_util';

export const newComment = (comment) => (dispatch) => (
  APIUtil.newComment(comment).then( comment => (dispatch(receiveComments({comments: [comment]}))))
);

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const fetchComments = (track_id) => (dispatch) => (
  APIUtil.fetchComments(track_id).then( comments => (
    dispatch(receiveComments(comments))
  ))
);

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};
