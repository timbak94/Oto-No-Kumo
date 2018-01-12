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
            return ( <button onClick={this.handlePlay} className="play-button-show"> <i className="fa fa-play" aria-hidden="true"></i> </button> );
          } else { return ( <button onClick={this.handlePause} className="pause-button-show"> <i className="fa fa-pause" aria-hidden="true"></i></button> ); }
        } else { return ( <button onClick={this.handleStart} className="play-button-show"> <i className="fa fa-play" aria-hidden="true"></i> </button> ); }
      } else {
        return ( <button onClick={this.handleStart} className="play-button-show"> <i className="fa fa-play" aria-hidden="true"></i> </button> );
      }
    }
  }

  componentDidMount(){
    if (!this.props.track) {
      this.props.requestSingleTrack(parseInt(this.props.trackId));
    }
    if (!this.props.author) {
      this.props.fetchSingleUser(parseInt(this.props.headUser));
    }
  }

  ownership() {
    if (this.props.currentUser.id === this.props.track.author_id) {
      return (
        <nav className="ownership">
          <button className="edit-track" onClick={(e) => {e.preventDefault(), this.props.showModal(
              <TrackFormContainer type={"edit"} trackId={this.props.track.id} hideModal={hideModal}/>)
                ;}}>Edit Track</button>
              <button className="delete-track" onClick={ this.handleDelete }>Delete Track</button>
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
          <PlayBar style="show"/>
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
    if (!this.props.author) {
      return null;
    }
    return (
      <section>
        <section className="track-show-head">
          <section className="track-show-head-no-image">
            <section className="track-show-head-no-image-no-bar">
              <section className="track-show-more-text">
                {this.whichButton()}
                <section className="track-show-text">
                  <Link className="link-a" to={`/users/${this.props.author.id}`}>
                    <h1 className="track-show-author">
                      {this.props.author.username}
                    </h1>
                  </Link>
                  <h1 className="track-show-title">{this.props.track.title}</h1>
                </section>
              </section>
              <ul className="play-count-genre">
                <li className="genre" > #{this.props.track.genre}</li>
                <li className="play-count" ><i class="fa fa-repeat" aria-hidden="true"></i>{this.props.track.play_count}</li>
              </ul>
            </section>
            <section className="bar-hold">
              {this.whichBar()}
            </section>
          </section>
          <img src={this.props.track.image_url} className="track-show-image"></img>
        </section>
        <section className="track-show-below">
          <CommentFormContainer trackId={this.props.track.id}/>
          <section className="track-show-below-form">
            <section className="track-show-author-info">
              <Link to={`/users/${this.props.author.id}`}>
                <img src={this.props.author.avatar_url} className="track-show-avatar"/>
              </Link>
              <Link to={`/users/${this.props.author.id}`}>
                <h1>{this.props.author.username}</h1>
              </Link>
              {this.ownership()}
            </section>
            <section className="description">
              <h1> Description </h1>
              <pre>{this.props.track.description}</pre>
            </section>
            <CommentIndexContainer id={this.props.track.id}/>
          </section>
        </section>
      </section>

    );
  }
}


export default withRouter(TrackShow);
