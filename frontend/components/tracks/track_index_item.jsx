import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlayBar from '../music_player/inline_play_bar_container';
import CommentFormContainer from '../comments/comment_form_container';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.authorInfo = this.authorInfo.bind(this);
  }

  componentDidMount() {
    if (this.props.author === undefined) {
      this.props.fetchSingleUser(this.props.track.author_id);
    }
  }

  handleStart(e) {
    e.preventDefault();
    this.props.requestCurrentSong(this.props.track);
  }

  handlePlay(e) {
    e.preventDefault();
    this.props.playSong();
  }

  handlePause(e) {
    e.preventDefault();
    this.props.pauseSong();
  }

  whichButton() {
    if (this.props.track) {
      if (this.props.currentSong) {
        if (this.props.currentSong.id === this.props.track.id) {
          if (this.props.status === "paused") {
            return ( <button onClick={this.handlePlay} className={`play-button${this.props.style === "home-page" ? "-home" : ""}`}> <i className="fa fa-play" aria-hidden="true"></i> </button> );
          } else { return ( <button onClick={this.handlePause} className={`pause-button${this.props.style === "home-page" ? "-home" : ""}`}> <i className="fa fa-pause" aria-hidden="true"></i></button> ); }
        } else { return ( <button onClick={this.handleStart} className={`play-button${this.props.style === "home-page" ? "-home" : ""}`}> <i className="fa fa-play" aria-hidden="true"></i> </button> ); }
      } else {
        return ( <button onClick={this.handleStart} className={`play-button${this.props.style === "home-page" ? "-home" : ""}`}> <i className="fa fa-play" aria-hidden="true"></i> </button> );
      }
    }
  }

  authorInfo() {
    if (this.props.author) {
      return (<Link className="track-index-author" to={`/users/${this.props.author.id}`}>
        <li key={this.props.author.id}>{this.props.author.username}</li>
      </Link>);
    }
  }

  whichBar() {
    if (this.props.currentSong) {
      if (this.props.currentSong.id === this.props.track.id) {
        return (
          <PlayBar style="index"/>
        );
      } else {
        return (
          <section className="placeholder-Bar-index">
          </section>
        );
      }
    } else {
      return (
        <section className="placeholder-Bar-index">
        </section>
      );
    }
  }

  render() {
    if (this.props.style === "big-list") {
      return (
        <div className="track-index-item-big">
          <Link to={`/tracks/${this.props.track.author_id}/${this.props.track.id}`}>
            <img className="track-index-image-reg" src={this.props.track.image_url}></img>
          </Link>
          <section className="track-index-bar">
            <section className="track-index-big-info">
              <section className="track-button-info-holder">
                {this.whichButton()}
                <section className="track-index-big-text">
                  {this.authorInfo()}
                  <Link className="track-index-name-big" to={`/tracks/${this.props.track.author_id}/${this.props.track.id}`}>
                    <li  key={this.props.track.id}>{this.props.track.title}</li>
                  </Link>
                </section>
              </section>
              <h1><i class="fa fa-repeat" aria-hidden="true"></i>{this.props.track.play_count}</h1>
            </section>
            <section className="track-index-bar-holder">
              {this.whichBar()}
            </section>
            <CommentFormContainer style={"inline"} trackId={this.props.track.id}/>
          </section>
        </div>
      );
    } else if (this.props.style === "home-page") {
      return (
        <section className="home-track-container">
          <section className="home-track-container-background">
            <section className="home-track" style={{backgroundImage: `url(${this.props.track.image_url})`}}>
              <section className="home-track-controller">
                {this.whichButton()}
              </section>
            </section>
          </section>
          <section className="home-info-holder">
            <h1>{this.props.track.title}</h1>
            <h2>{this.props.author.username}</h2>
          </section>
        </section>
      );
    } else {
      return (
        <section className="playlist-item">
          <img id="playlist-album" src={this.props.track.image_url}></img>
          <section className="playlist-text">
            <Link className="track-index-title" to={`/tracks/${this.props.track.id}`}>
              <li key={this.props.track.id}>{this.props.track.title}</li>
            </Link>
            <Link className="track-index-author" to={`/users/${this.props.author.id}`}>
              <li key={this.props.author.id}>{this.props.author.username}</li>
            </Link>
          </section>
        </section>
      );
    }
  }
}

export default withRouter(TrackIndexItem);
