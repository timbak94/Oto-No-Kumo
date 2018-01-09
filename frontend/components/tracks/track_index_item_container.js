import { connect } from 'react-redux';
import { requestCurrentSong, playSong, pauseSong, seekSong } from '../../actions/player_actions';
import { clearErrors } from '../../actions/session_actions';
import TrackIndexItem from './track_index_item';

export const mapStateToProps = (state, ownProps) => {
  return {
    track: ownProps.track,
    style: ownProps.style,
    currentSong: state.player.currentSong,
    status: state.player.status,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    requestCurrentSong: (song) => dispatch(requestCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
