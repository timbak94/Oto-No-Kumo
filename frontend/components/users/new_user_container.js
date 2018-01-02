import { connect } from 'react-redux';

import { signUpUser } from '../../actions/session_actions';

import NewUserForm from './new_user';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (user) => dispatch(signUpUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);