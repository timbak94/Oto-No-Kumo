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
      <section>
        <ol>
          {this.props.tracks.map(track => (
            <li>
              <TrackIndexItemContainer
                track={track}
                key={track.id}
                style={"big-list"}
                />
            </li>
          ))}
        </ol>
      </section>
    );
  }
}

export default withRouter(Chart);
