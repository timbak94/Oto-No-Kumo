import { connect } from 'react-redux';
import { seekSong, clearSeek } from '../../actions/player_actions';
import { fetchSingleUser } from '../../actions/user_actions';
import PlayBar from './inline_play_bar';

const mapStateToProps = (state, ownProps) => {
  return {
    song: state.player.currentSong ? state.player.currentSong : null,
    current: state.player.current ? state.player.current : null,
    remaining: state.player.remaining ? state.player.remaining : null,
    seek: state.player.seek
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    seekSong: (time) => dispatch(seekSong(time)),
    clearSeek: () => dispatch(clearSeek()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);
