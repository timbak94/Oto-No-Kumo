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
            return ( <button onClick={this.handlePlay}> Play </button> );
          } else { return ( <button onClick={this.handlePause}> Pause </button> ); }
        } else { return ( <button onClick={this.handleStart}> Start </button> ); }
      } else {
        return ( <button onClick={this.handleStart}> Start </button> );
      }
    }
  }

  authorInfo() {
    if (this.props.author) {
      return (<Link to={`/users/${this.props.author.id}`}>
        <li key={this.props.author.id}>{this.props.author.username}</li>
      </Link>);
    }
  }

  render() {
    if (this.props.style === "big-list") {
      return (
        <div className="track-index-item">
          <Link to={`/tracks/${this.props.track.author_id}/${this.props.track.id}`}>
            <img className="track-index-image-reg" src={this.props.track.image_url}></img>
          </Link>
          <Link to={`/tracks/${this.props.track.author_id}/${this.props.track.id}`}>
            <li key={this.props.track.id} >{this.props.track.title}</li>
          </Link>
          {this.authorInfo()}
          {this.whichButton()}
        </div>
      );
    }
  }
}

export default withRouter(TrackIndexItem);
