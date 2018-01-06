import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TrackFormContainer from './track_form_container';
import { hideModal } from '../../modal/actions_reducers';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (!this.props.track) {
      this.props.requestSingleTrack(parseInt(this.props.trackId));
    }
  }


  render() {

    if (!this.props.track) {
      return null;
    }
    return (
      <section>

        <div> {this.props.track.title} </div>
        <div> {this.props.track.description} </div>
        <img src={this.props.track.image_url}></img>
        <button onClick={(e) => {e.preventDefault(), this.props.showModal(
            <TrackFormContainer type={"edit"} trackId={this.props.track.id} hideModal={hideModal}/>)
              ;}}>Edit Track</button>
      </section>

    );
  }
}


export default withRouter(TrackShow);
