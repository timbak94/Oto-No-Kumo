export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
import * as APIUtil from '../util/user_api_util';


export const fetchSingleUser = (id) => (dispatch) => (
  APIUtil.fetchUser(id).then((user) => dispatch(receiveSingleUser(user)))
);

const receiveSingleUser = (user) => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};
