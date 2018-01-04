import { connect } from 'react-redux';
import { withRouter } from 'react-redux-dom';
import { hideModal } from './actions_reducers';

import { ModalComponent } from './modal_component'

const mapStatetoProps = (state, ownProps) => {
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

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchToProps
)(ModalComponent));
