import React from 'react';

class ModalComponent extends React.Component {

  constructor(props) {
    super(props),
    this.state = {
      component: this.props.component
    }
  }
  render() {
    if (!this.props.component) {
      return null;
    } else {
      return(
        <div className='modal-backdrop' onClick={this.props.hide}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {this.props.component}
          </div>
        </div>
      );
    }
  }
}

export default ModalComponent
