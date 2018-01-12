import React from 'react';
import { withRouter } from 'react-router-dom';
import TrackIndexItemContainer from '../tracks/track_index_item_container';

class Chart extends React.Component {

  componentDidMount() {
    if (this.props.tracks.length === 0) {
      this.props.requestChartTracks(this.props.genre);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.genre !== this.props.genre) {
      this.props.requestChartTracks(nextProps.genre);
    }
  }

  render() {
    return (
      <section className="chart-container">
        <ol className="countdown">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ol>
        <ul>
          {this.props.tracks.map(track => (
            <li>
              <TrackIndexItemContainer
                track={track}
                key={track.id}
                style={"big-list"}
                />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default withRouter(Chart);
