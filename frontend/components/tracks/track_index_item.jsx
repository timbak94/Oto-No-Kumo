import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e) {
    e.preventDefault();
    this.props.requestCurrentSong(this.props.track);
  }

  whichButton() {
    if (this.props.track) {
      if (this.props.currentSong) {
        if (this.props.currentSong.id === this.props.track.id) {

        }
      } else {
        return ( <button onClick={this.handlePlay}> </button> );
      }
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
          {this.whichButton()}
        </div>
      );
    }
  }
}

export default withRouter(TrackIndexItem);
