import * as APIUtil from '../util/session_api_util';
import { startLoading, stopLoading } from './loading_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const recieveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const recieveErrors = (sessionErrors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    sessionErrors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const signUpUser = (user) => dispatch => {
  dispatch(startLoading());
  return APIUtil.signup(user).then( user => {
    dispatch(recieveCurrentUser(user));
    dispatch(stopLoading());
  }, err => {
    dispatch(stopLoading());
    dispatch(recieveErrors(err.responseJSON));
  });
};

export const logInUser = (user) => dispatch => (
  APIUtil.login(user).then( user => (
    dispatch(recieveCurrentUser(user))
  ), err => (
    dispatch(recieveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then( user => (
    dispatch(recieveCurrentUser(null))
  ))
);
