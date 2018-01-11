import { connect } from 'react-redux';
import { requestSingleTrack, requestChartTracks } from '../../actions/track_actions';
import Chart from './chart';

const mapStateToProps = (state, ownProps) => {
  let tracks = [];
  state.entities.charts[ownProps.genre].forEach((track_id) => {
    if (state.entities.tracks[track_id]) {
      tracks.push(state.entities.tracks[track_id]);
    }
  });
  return {
    genre: ownProps.genre,
    tracks: tracks
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    requestChartTracks: (genre) => dispatch(requestChartTracks(genre))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chart);
