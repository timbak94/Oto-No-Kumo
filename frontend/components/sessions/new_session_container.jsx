import { connect } from 'react-redux';

import { logInUser } from '../../actions/session_actions';

import NewSessionForm from './new_session';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => dispatch(logInUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSessionForm);
