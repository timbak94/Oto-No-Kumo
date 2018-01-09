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
      length: 1,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleProgressClick = this.handleProgressClick.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.setStatus = this.setStatus.bind(this);
    // this.barIncrement = this.barIncrement.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === "paused") {
      this.audioPlayer.pause();
    }
    if (nextProps.status === "playing") {
      this.audioPlayer.play();
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
      return (<button onClick={this.handlePause}>Pause</button>);
    }
    if (this.state.playStatus === "paused") {
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


  handleTime() {
    if (this.audioPlayer) {
      this.props.updateTime(this.audioPlayer.currentTime, this.audioPlayer.duration);
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
    this.audioPlayer.currentTime = e.target.value;
  }

  handleVolume(e) {
    e.preventDefault();
    this.audioPlayer.volume = e.target.value/100;
  }

  render() {
    if (this.props.song) {
      return (
        <div>
          <section className={`footer-music-player ${this.visible()}`}>
            <audio
              id="audio"
              src={this.props.song.song_url}
              autoPlay
              onLoadedData={this.handleDuration}
              onTimeUpdate={this.handleTime}
              onPause={(e) => {e.preventDefault(); this.setStatus("paused");}}
              onPlay={(e) => {e.preventDefault(); this.setStatus("playing");}}
              ref={(audio) => { this.audioPlayer = audio; }}
              />
            <h1>"this is where the music player would be"</h1>
            {this.whichButton()}
            {this.songInfo()}
            <h1>{this.props.current}</h1>
            <div className="slidecontainer" >
              <input onChange={this.handleSeek} type="range" min="0" max={this.state.length} value={this.props.current ? this.props.current : "0"} className="slider" id="myRange" />
            </div>
            <h1>{this.props.remaining}</h1>
            <input onChange={this.handleVolume} type="range" min="0" max="100" defaultValue="50" className="volume-slider" />
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}


export default withRouter(MusicPlayer);





//  OOOOOLD STUFFFFFFFFFFFFFFFFF ~~~~~~~~~~~~~~~~~~~~
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

// buildBar() {
//   let elem = document.getElementById("audio");
//   let length = elem.duration;
//   let actualLength = length / 1000;
//   let arr = [];
//   for (var i = 0; i < actualLength; i++) {
//     arr.push(i);
//   }
//   this.setState({progressArray: arr});
// }
//
// progressBar() {
//   if (this.state.progressArray) {
//
//     return (
//       <section>
//         <ul className="progress-bar" onClick={this.handleProgressClick}>
//           {this.progressArray.map(box => (
//             <li key={box} className="progress-box" value={box}></li>
//           ))}
//         </ul>
//         <div id="progress-behind"/>
//       </section>
//     );
//   } else {
//     return null;
//   }
// }
//
// barIncrement() {
//   let elem = document.getElementById("progress-behind");
//   let width;
//   if (elem.style.width === "") {
//     width = 0 ;
//   } else {
//     width = parseFloat(elem.style.width);
//   }
//   let inc = (500 / (this.songLength / 1000));
//   elem.style.width = parseFloat(width+inc) + "px";
// }
