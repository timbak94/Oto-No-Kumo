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

  handleSeek(e) {
    e.preventDefault();
    this.props.seekSong(e.target.value);
  }

  render() {
    return (
      <input onChange={this.handleSeek} type="range" min="0" max={this.length} value={this.props.current ? this.props.current : "0"} className="slider-show" id="myRange" />
    );
  }
}

export default PlayBar;
