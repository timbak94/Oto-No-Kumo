import React from 'react';

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.length = (this.props.current + this.props.remaining);
    this.handleSeek = this.handleSeek.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.length === 0) {
      this.length = this.props.current + this.props.remaining;
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

  handleSeek(e) {
    e.preventDefault();
    this.props.seekSong(e.target.value);
  }

  render() {
    return (
      <section>
        <input onChange={this.handleSeek} type="range" min="0" max={this.length} value={this.props.current ? this.props.current : "0"} className="slider-show" id="myRange" />
        <section className="progress-time">
          <h1> {this.timeFormat(this.props.current)} </h1>
          <h1> {this.timeFormat(this.props.remaining)} </h1>
        </section>
      </section>
    );
  }
}

export default PlayBar;
