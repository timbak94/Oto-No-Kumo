import { connect } from 'react-redux';
import LandingPage from './landing_page';
import {showModal} from '../../modal/actions_reducers';
import { fetchSingleUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    tracks: state.entities.users[1] ? state.entities.users[1].user_tracks : null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (id) => { dispatch(fetchSingleUser(id));},
    showModal: (comp) => { dispatch(showModal(comp));}
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
