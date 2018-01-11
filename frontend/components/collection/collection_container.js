import { connect } from 'react-redux';

import { fetchSingleUser } from '../../actions/user_actions';
import Collection from './collection';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.entities.users[state.session.currentUser.id],
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
