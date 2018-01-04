import { connect } from 'react-redux';

import { logInUser, clearErrors } from '../../actions/session_actions';

import NewSessionForm from './new_session';

const mapStateToProps = (state) => {
  debugger
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => dispatch(logInUser(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSessionForm);
