import { SHOW_MODAL, HIDE_MODAL } from './actions_reducers'

const modalReducer = (state = {component: null}, action) => {
  switch(action.type) {
    case SHOW_MODAL: {
      return {component: action.component};
    }
    case HIDE_MODAL: {
      return {component: null};
    }
    default: return state;
  }
};

export default modalReducer;
