import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TrackFormContainer from './track_form_container';
import { hideModal } from '../../modal/actions_reducers';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackFile: null
    };
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount(){
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ trackFile: file});
      this.props.showModal(<TrackFormContainer trackFile={this.state.trackFile} hideModal={hideModal}/>);
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  modalanim() {
    if (this.props.modals === null) {
      return "norm";
    } else {
      return "move-up";
    }
  }


  render() {

    return (
      <section>
        <section className={`upload-container ${this.modalanim()}`}>
          <h1>Upload to Oto no Kumo</h1>
          <div className="upload-btn-wrapper">
            <button className="real-button"> Choose a file to upload </button>
            <input className="file-button" type="file" accept=".mp3" onChange={this.updateFile} />
          </div>
        </section>
      </section>

    );
  }
}



export default withRouter(Upload);
