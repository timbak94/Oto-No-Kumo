import React from 'react';
import Sound from 'react-sound';
import { Link, withRouter } from 'react-router-dom';
import TrackIndex from '../tracks/track_index';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    let status;
    if (this.props.status === "playing") {
      status = "playing";
    } else if (this.props.status === "stopped") {
      status = "stopped";
    } else if (this.props.status === "paused") {
      status = "paused";
    }
    this.state = {
      playStatus: status,
      currentTime: 0,
      length: 1,
      showVolume: "hidden-vol",
      showPlaylist: "hidden"
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleProgressClick = this.handleProgressClick.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.showVolume = this.showVolume.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.showPlaylist = this.showPlaylist.bind(this);
    this.skipNext = this.skipNext.bind(this);
    this.prevSkip = this.prevSkip.bind(this);
    this.playlistIdx = 0;
    this.playlistLoop = true;
    this.singleLoop = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "paused") {
      this.audioPlayer.pause();
    }
    if (nextProps.status === "playing") {
      this.audioPlayer.play();
    }
    if (nextProps.seek) {
      this.audioPlayer.currentTime = nextProps.seek;
      this.props.clearSeek();
    }
    if (this.props.song) {
      if (this.props.author === null) {
        this.props.fetchSingleUser(this.props.song.author_id);
      }

    }
    if (this.props.playlist.length < 1 && nextProps.playlist[0] && this.props.song === null) {
      this.props.requestCurrentSong(nextProps.playlist[0]);
    }
    if (this.props.playlist.length > nextProps.playlist.length) {
      let idx;
      this.props.playlist.forEach((el, i) => {
        if (el.id === nextProps.lastRemoved.id) {
          idx = i;
        }
      });
      if (idx <= this.playlistIdx && this.playlistIdx > 0) {
        this.playlistIdx -= 1;
      }

    }
    if (this.props.song && nextProps.song.id !== this.props.song.id) {
      nextProps.playlist.forEach((el, i)=>{
        if (el.id === nextProps.song.id) {
          this.playlistIdx = i;
        }
      });
    }
  }

  handlePlay(e) {
    e.preventDefault();
    this.setState({playStatus: "playing"});
    this.audioPlayer.play();
    this.props.playSong();
    // this.hello = setInterval(this.barIncrement, 1000);
  }

  handlePause(e) {
    e.preventDefault();
    this.setState({playStatus: "paused"});
    this.audioPlayer.pause();
    this.props.pauseSong();
    // clearInterval(this.hello);
  }


  whichButton() {
    if (this.state.playStatus === "playing" || this.state.playStatus === "start") {
      return (<button className="music-controller" onClick={this.handlePause}>
      <i className="fa fa-pause" aria-hidden="true"></i>
    </button>);
    }
    if (this.state.playStatus === "paused") {
      return (<button className="music-controller" onClick={this.handlePlay}>
      <i className="fa fa-play" aria-hidden="true"></i>
    </button>);
    }
  }

  handleProgressClick(e) {
    e.preventDefault();
    this.setState({pausedPoint: (e.target.value * 1000 + 450)});
  }

  visible() {
    return this.props.song ? "" : "hidden";
  }

  songInfo() {
    if (this.props.author) {
      return (
        <section className="song-info">
          <img src={this.props.song.image_url} className="player-image"></img>
          <ul>
            <Link to={`/users/${this.props.author.id}`}>
              <li className="author-name">{this.props.author.username}</li>
            </Link>
            <Link to={`/tracks/${this.props.song.author_id}/${this.props.song.id}`}>
              <li style={{color: "black"}}>{this.props.song.title}</li>
            </Link>
          </ul>

        </section>
      );
    }
  }


  handleTime() {
    if (this.audioPlayer) {
      this.props.updateTime(Math.round(this.audioPlayer.currentTime),
       Math.round(this.audioPlayer.duration - this.audioPlayer.currentTime));
    }
  }

  setStatus(target) {
    this.setState({playStatus: target});
  }

  handleDuration() {
    this.setState({length: this.audioPlayer.duration});
    this.audioPlayer.volume = 0.5;
  }


  handleSeek(e) {
    e.preventDefault();
    this.props.seekSong(e.target.value);
  }

  handleVolume(e) {
    e.preventDefault();
    this.audioPlayer.volume = e.target.value/100;
  }

  showVolume(e) {
    e.preventDefault();
    if (this.state.showVolume === "hidden-vol") {
      this.setState({showVolume: "show-vol"});
    } else {
      this.setState({showVolume: "hidden-vol"});
    }
  }

  timeFormat(sec) {
    let mins = ~~((sec % 3600) / 60);
    let secs = sec % 60;
    let ans = "";

    ans += "" + mins + ":" + (secs < 10 ? "0" : "");
    ans += "" + secs;
    return ans;
  }

  nextSong() {
    if (this.singleLoop === true) {
      this.audioPlayer.play();
    } else {
      this.playlistIdx += 1;
      if (this.playlistLoop === true && this.playlistIdx === this.props.playlist.length) {
        this.playlistIdx = 0;
      }
      this.props.requestCurrentSong(this.props.playlist[this.playlistIdx]);
    }
  }

  showPlaylist(e) {
    e.preventDefault();
    if (this.state.showPlaylist === "hidden") {
      this.setState({showPlaylist: "animated fadeInUp"});
    } else {
      this.setState({showPlaylist: "hidden"});
    }
  }

  skipNext(e) {
    e.preventDefault();
    this.playlistIdx += 1;
    if (this.playlistLoop === true && this.playlistIdx === this.props.playlist.length) {
      this.playlistIdx = 0;
    }
    this.props.requestCurrentSong(this.props.playlist[this.playlistIdx]);
  }

  prevSkip(e) {
    e.preventDefault();
    this.playlistIdx -= 1;
    if (this.playlistIdx < 0) {
      this.playlistIdx = this.props.playlist.length - 1;
    }
    this.props.requestCurrentSong(this.props.playlist[this.playlistIdx]);
  }

  render() {
    if (this.props.song) {
      return (
        <div >
          <section className={`footer-music-player ${this.visible()}`}>
            <section className="music-container">
              <audio
                id="audio"
                src={this.props.song.song_url}
                autoPlay
                onLoadedData={this.handleDuration}
                onTimeUpdate={this.handleTime}
                onPause={(e) => {e.preventDefault(); this.setStatus("paused");}}
                onPlay={(e) => {e.preventDefault(); this.setStatus("playing");}}
                onEnded={(e)=> {e.preventDefault(); this.nextSong();}}
                ref={(audio) => { this.audioPlayer = audio; }}
                />
              <button onClick={this.prevSkip} className="music-controller">
                <i className="fa fa-step-backward"></i>
              </button>
              {this.whichButton()}
              <button onClick={this.skipNext} className="music-controller">
                <i  className="fa fa-step-forward"></i>
              </button>
              <div className="slidecontainer">
                <section className="current-time">
                  {this.timeFormat(this.props.current)}
                </section>
                <input
                  onChange={this.handleSeek}
                  type="range"
                  min="0"
                  max={this.state.length}
                  value={this.props.current ? this.props.current : "0"}
                  className="slider"
                  id="myRange" />
                <section className="remaining-time">
                  {this.timeFormat(this.props.remaining)}
                </section>
              </div>
              <div>
                <button
                  onClick={this.showVolume}
                  className="music-controller">
                  <i className="fa fa-volume-off" aria-hidden="true" ></i>
                </button>
                <section className="vol-slide-cont">
                  <section className={`${this.state.showVolume}`}>
                    <input
                      onChange={this.handleVolume}
                      orient="vertical"
                      type="range" min="0"
                      max="100"
                      defaultValue="50"
                      className={`volume-slider `}/>
                  </section>
                </section>
              </div>
              {this.songInfo()}
              <section className="playlist-handler">
                <i onClick={this.showPlaylist} className="fa fa-bars hamburger" aria-hidden="true"></i>
                <section className={`playlistHolder ${this.state.showPlaylist}`}>
                  <h1>Playlist</h1>
                  <TrackIndex tracks={this.props.playlist} style={"playlist"}/>
                </section>
              </section>
            </section>
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}


export default withRouter(MusicPlayer);
