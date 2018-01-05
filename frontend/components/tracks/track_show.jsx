import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (!this.props.track) {
      debugger
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
      </section>

    );
  }
}


export default withRouter(TrackShow);
