import { connect } from 'react-redux';

import { signUpUser, clearErrors } from '../../actions/session_actions';

import NewUserForm from './new_user';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (user) => dispatch(signUpUser(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
