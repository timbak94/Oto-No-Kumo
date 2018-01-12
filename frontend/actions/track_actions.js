import * as APIUtil from '../util/track_api_util';
import { fetchSingleUser } from './user_actions';
import { startLoading, stopLoading } from './loading_actions';
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_CHART_TRACKS = "RECEIVE_CHART_TRACKS";

export const requestChartTracks = (genre) => (dispatch) => {
  return APIUtil.fetchChartTracks(genre).then((tracks) => {
    dispatch(receiveChartTracks(tracks));
  });
};

export const requestSingleTrack = (id) => (dispatch) => {
  return APIUtil.getTrack(id).then((track) => {
    dispatch(recieveTrack(track));
    return track;
  });
};

export const requestTrackEdit = (track) => (dispatch) => {
  dispatch(startLoading());
  return APIUtil.editTrack(track).then((track) => {
    dispatch(stopLoading());
    dispatch(recieveTrack(track));
    return track;
  }, err => {
    dispatch(stopLoading());
  });
};

export const requestNewTrack = (track) => (dispatch) => {
  dispatch(startLoading());
  return APIUtil.createTrack(track).then((track) => {
    dispatch(stopLoading());
    dispatch(recieveTrack(track));
    dispatch(fetchSingleUser(track.author_id));
    return track;
  }, err => {
    dispatch(stopLoading());
  });
};

export const deleteTrack = (trackId) => (dispatch) => {
  dispatch(startLoading());
  return APIUtil.deleteTrack(trackId).then( (track) => {
    dispatch(stopLoading());
    dispatch(removeTrack(track));
    dispatch(fetchSingleUser(track.author_id));
  }, err => {
    dispatch(stopLoading());
  });
};

export const fetchCommentedTracks = (userId) => (dispatch) => {
  return APIUtil.fetchCommentedTracks(userId).then( (tracks) => {
    tracks.forEach((track) => {
      dispatch(recieveTrack(track));
    });
  });
};

const receiveChartTracks = (tracks) => {
  return {
    type: RECEIVE_CHART_TRACKS,
    tracks
  };
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
