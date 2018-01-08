import { connect } from 'react-redux';
import Upload from './upload';
import {showModal} from '../../modal/actions_reducers';

const mapStateToProps = (state, ownProps) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showModal: (comp) => {dispatch(showModal(comp));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
