import React from 'react';
import Sound from 'react-sound';
import { Link, withRouter } from 'react-router-dom';

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
      songLength: 0,
      progressArray: null,
      built: null
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleProgressClick = this.handleProgressClick.bind(this);
    this.barIncrement = this.barIncrement.bind(this);
  }



  handlePlay(e) {
    e.preventDefault();
    this.setState({playStatus: "playing"});
    let elem = document.getElementById("audio");
    elem.play();
    this.props.playSong();
    // this.hello = setInterval(this.barIncrement, 1000);
  }

  handlePause(e) {
    e.preventDefault();
    this.setState({playStatus: "paused"});
    let elem = document.getElementById("audio");
    elem.pause();
    this.props.pauseSong();
    // clearInterval(this.hello);
  }


  whichButton() {
    if (this.state.playStatus === "playing") {
      return (<button onClick={this.handlePause}>Pause</button>);
    } else if (this.state.playStatus === "paused" || "stopped") {
      return (<button onClick={this.handlePlay}>Play</button>);
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

  buildBar() {
      let elem = document.getElementById("audio");
      let length = elem.duration;
      let actualLength = length / 1000;
      let arr = [];
      for (var i = 0; i < actualLength; i++) {
        arr.push(i);
      }
      this.setState({progressArray: arr});
  }

  progressBar() {
    if (this.state.progressArray) {

      return (
        <section>
          <ul className="progress-bar" onClick={this.handleProgressClick}>
            {this.progressArray.map(box => (
              <li key={box} className="progress-box" value={box}></li>
            ))}
          </ul>
          <div id="progress-behind"/>
        </section>
      );
    } else {
      return null;
    }
  }

  barIncrement() {
    let elem = document.getElementById("progress-behind");
    let width;
    if (elem.style.width === "") {
      width = 0 ;
    } else {
      width = parseFloat(elem.style.width);
    }
    let inc = (500 / (this.songLength / 1000));
    elem.style.width = parseFloat(width+inc) + "px";
  }

  handleTime() {
    let elem = document.getElementById("audio");
    console.log(elem.currentTime);
    return (
      <h1> elem.currentTime </h1>
    );
  }

  render() {
    if (this.props.song) {
      return (
        <div>
          <section className={`footer-music-player ${this.visible()}`}>
            <audio id="audio" src={this.props.song.song_url} autoPlay ></audio>
            <h1>"this is where the music player would be"</h1>
            {this.whichButton()}
            {this.progressBar()}
            {this.songInfo()}
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}


export default withRouter(MusicPlayer);






// let songMaker2 = (  <Sound
//   url={this.props.song.song_url}
//   playStatus={this.state.playStatus}
//   playFromPosition={this.state.pausedPoint}
//   onPause={ (obj) => { this.setState({pausedPoint: (obj.position + 450)});}}
//   onLoading={ (obj) => {
//     this.songLength = obj.duration;
//   }
// }
// onLoad={()=>{
// }}
// volume={50}
// onFinishedPlaying={() => { clearInterval(this.hello);}}
// /> );
