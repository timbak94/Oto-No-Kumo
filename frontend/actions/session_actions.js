import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

export const signUpUser = (user) => dispatch => (
  APIUtil.signup(user).then( user => (
    dispatch(recieveCurrentUser(user))
  ), err => (
    dispatch(recieveErrors(err.responseJSON))
  ))
);

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
