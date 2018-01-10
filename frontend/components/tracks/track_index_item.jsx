import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
            return ( <button onClick={this.handlePlay} className="play-button"> <i className="fa fa-play" aria-hidden="true"></i> </button> );
          } else { return ( <button onClick={this.handlePause} className="pause-button"> <i className="fa fa-pause" aria-hidden="true"></i></button> ); }
        } else { return ( <button onClick={this.handleStart} className="play-button"> <i className="fa fa-play" aria-hidden="true"></i> </button> ); }
      } else {
        return ( <button onClick={this.handleStart} className="play-button"> <i className="fa fa-play" aria-hidden="true"></i> </button> );
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

  render() {
    if (this.props.style === "big-list") {
      return (
        <div className="track-index-item-big">
          <Link to={`/tracks/${this.props.track.author_id}/${this.props.track.id}`}>
            <img className="track-index-image-reg" src={this.props.track.image_url}></img>
          </Link>
          <section className="track-index-big-info">
            {this.whichButton()}
            <section className="track-index-big-text">
              {this.authorInfo()}
              <Link className="track-index-name-big" to={`/tracks/${this.props.track.author_id}/${this.props.track.id}`}>
                <li  key={this.props.track.id}>{this.props.track.title}</li>
              </Link>
            </section>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(TrackIndexItem);
