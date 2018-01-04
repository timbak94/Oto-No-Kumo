import { connect } from 'react-redux';
import { hideModal } from './actions_reducers';

import ModalComponent from './modal_component'

const mapStatetoProps = (state) => {

  return {
    component: state.modals.component,
    visible: Boolean(state.modals.component)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hide: () => dispatch(hideModal())
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ModalComponent);
