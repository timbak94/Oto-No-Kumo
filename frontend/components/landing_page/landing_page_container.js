import { connect } from 'react-redux';
import LandingPage from './landing_page';
import {showModal} from '../../modal/actions_reducers';



const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (comp) => { dispatch(showModal(comp));}
  }

};

export default connect(null, mapDispatchToProps)(LandingPage);
