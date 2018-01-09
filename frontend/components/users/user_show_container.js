import { connect } from 'react-redux';
import { fetchSingleUser } from '../../actions/user_actions.js';
import UserShow from './user_show';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.entities.users[ownProps.match.params.userId],
    headUser: ownProps.match.params.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
