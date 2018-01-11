import * as APIUtil from '../util/track_api_util';
import { fetchSingleUser } from './user_actions';
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const requestSingleTrack = (id) => (dispatch) => {
  return APIUtil.getTrack(id).then((track) => {
    dispatch(recieveTrack(track));
    return track;
  });
};

export const requestTrackEdit = (track) => (dispatch) => {
  return APIUtil.editTrack(track).then((track) => {
    dispatch(recieveTrack(track));
    return track;
  });
};

export const requestNewTrack = (track) => (dispatch) => {
  return APIUtil.createTrack(track).then((track) => {
    dispatch(recieveTrack(track));
    dispatch(fetchSingleUser(track.author_id));
    return track;
  });
};

export const deleteTrack = (trackId) => (dispatch) => {
  return APIUtil.deleteTrack(trackId).then( (track) => {
    dispatch(removeTrack(track));
    dispatch(fetchSingleUser(track.author_id));
  });
};

export const fetchCommentedTracks = (userId) => (dispatch) => {
  return APIUtil.fetchCommentedTracks(userId).then( (tracks) => {
    tracks.forEach((track) => {
      dispatch(recieveTrack(track));
    });
  });
};

const recieveTrack = (track) => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};

const removeTrack = (track) => {
  return {
    type: REMOVE_TRACK,
    track
  };
};
