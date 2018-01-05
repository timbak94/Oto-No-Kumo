import * as APIUtil from '../util/track_api_util';

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
    return track;
  });
};

export const deleteTrack = (trackId) => (dispatch) => {
  return APIUtil.deleteTrack(trackId).then( (track) => {
    dispatch(removeTrack(track));
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
