import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TrackFormContainer from './track_form_container';
import { hideModal } from '../../modal/actions_reducers';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';
import PlayBar from '../music_player/inline_play_bar_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);

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

  whichButton() {
    if (this.props.track) {
      if (this.props.currentSong) {
        if (this.props.currentSong.id === this.props.track.id) {
          if (this.props.status === "paused") {
            return ( <button onClick={this.handlePlay} className="play-button"> <i className="fa fa-play" aria-hidden="true"></i> </button> );
          } else { return ( <button onClick={this.handlePause} className="pause-button"> <i className="fa fa-pause" aria-hidden="true"></i></button> ); }
        } else { return ( <button onClick={this.handleStart} className="play-button"> <i className="fa fa-play" aria-hidden="true"></i> </button> ); }
      } else {
        return ( <button onClick={this.handleStart} className="play-button"> <i className="fa fa-play" aria-hidden="true"></i> </button> );
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

  handleStart(e) {
    e.preventDefault();
    if (this.props.track) {
      this.props.requestCurrentSong(this.props.track);
    }
  }

  handlePlay(e) {
    e.preventDefault();
    this.props.playSong();
  }

  handlePause(e) {
    e.preventDefault();
    this.props.pauseSong();
  }

  whichBar() {
    if (this.props.currentSong) {
      if (this.props.currentSong.id === this.props.track.id) {
        return (
          <PlayBar />
        );
      } else {
        return (
          <section className="placeholder-Bar-show">
          </section>
        );
      }
    } else {
      return (
        <section className="placeholder-Bar-show">
        </section>
      );
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
        {this.whichButton()}
        <section className="bar-hold">
          {this.whichBar()}
        </section>
        <CommentFormContainer trackId={this.props.track.id}/>
        <CommentIndexContainer id={this.props.track.id}/>
      </section>

    );
  }
}


export default withRouter(TrackShow);
