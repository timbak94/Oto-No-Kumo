import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TrackFormContainer from './track_form_container';
import { hideModal } from '../../modal/actions_reducers';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.track) {
      if (nextProps.match.path === "/users/:userId/:trackId") {
        if (parseInt(nextProps.match.params.trackId) !== this.props.track.id) {
          this.props.requestSingleTrack(nextProps.match.params.trackId);
        }
      }
    }
  }

  componentDidMount(){
    if (!this.props.track) {
      this.props.requestSingleTrack(parseInt(this.props.trackId));
    }
  }

  ownership() {
    if (this.props.currentUser.id === this.props.track.author_id) {
      return (
        <nav>
          <button onClick={(e) => {e.preventDefault(), this.props.showModal(
              <TrackFormContainer type={"edit"} trackId={this.props.track.id} hideModal={hideModal}/>)
                ;}}>Edit Track</button>
              <button onClick={ this.handleDelete }>Delete Track</button>
        </nav>
      );
    } else {
      return null;
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTrack(this.props.track.id);
    this.props.history.push("/welcome");
  }

  handlePlay(e) {
    e.preventDefault();
    if (this.props.track) {
      this.props.requestCurrentSong(this.props.track);
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
        <img src={this.props.track.image_url} className="track-show-image"></img>
        {this.ownership()}
        <button onClick={this.handlePlay}>"Play this track"</button>
      </section>

    );
  }
}


export default withRouter(TrackShow);
