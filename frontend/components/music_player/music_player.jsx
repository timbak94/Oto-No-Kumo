import React from 'react';
import Sound from 'react-sound';
import { Link, withRouter } from 'react-router-dom';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    let status;
    if (this.props.status === "playing") {
      status = Sound.status.PLAYING;
    } else if (this.props.status === "stopped") {
      status = Sound.status.STOPPED;
    } else if (this.props.status === "paused") {
      status = Sound.status.PAUSED;
    }
    this.state = {
      playStatus: status,
      pausedPoint: 0,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  songMaker() {
    if (this.props.song) {
      return (
        <Sound
          url={this.props.song.song_url}
          playStatus={this.state.playStatus}
          playFromPosition={this.state.pausedPoint}
          onPause={ (obj) => { console.log(obj.position); this.setState({pausedPoint: (obj.position + 450)});}}
          volume={50}/>
      );
    } else {
      return null;
    }
  }

  handlePlay(e) {
    e.preventDefault();
    this.setState({playStatus: Sound.status.PLAYING});
  }

  handlePause(e) {
    e.preventDefault();
    this.setState({playStatus: Sound.status.PAUSED});
  }

  whichButton() {
    if (this.state.playStatus === Sound.status.PLAYING) {
      return (<button onClick={this.handlePause}>Pause</button>);
    } else if (this.state.playStatus === Sound.status.PAUSED || Sound.status.STOPPED) {
      return (<button onClick={this.handlePlay}>Play</button>);
    }
  }

  visible() {
    return this.props.song ? "" : "hidden";
  }

  songInfo() {
    if (this.props.song) {
      return (
        <section>
          <img src={this.props.song.image_url} className="player-image"></img>
          <ul>
            <li>{this.props.song.title}
            </li>
          </ul>
        </section>
      );
    }
  }

  render() {
    return (
      <div>
        <section className={`footer-music-player ${this.visible()}`}>
          <h1>"this is where the music player would be"</h1>
          {this.songMaker()}
          {this.whichButton()}
          {this.songInfo()}
        </section>
      </div>
    );
  }
}


export default withRouter(MusicPlayer);
