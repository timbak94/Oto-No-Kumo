import { connect } from 'react-redux';
import { logInUser, clearErrors } from '../../actions/session_actions';

import NewSessionForm from './new_session';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hideModal: ()=> dispatch(ownProps.hideModal()),
    logInUser: (user) => dispatch(logInUser(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSessionForm);
