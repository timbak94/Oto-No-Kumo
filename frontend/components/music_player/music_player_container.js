import { connect } from 'react-redux';
import { requestCurrentSong,
  playSong,
  stopSong,
  pauseSong,
  updateTime
 } from '../../actions/player_actions';
import MusicPlayer from './music_player';

const mapStateToProps = (state, ownProps) => {
  let showSong = null;
  return {
    song: state.player.currentSong ? state.player.currentSong : null,
    current: state.player.current ? state.player.current : null,
    remaining: state.player.remaining ? state.player.remaining : null,
    show: showSong,
    status: state.player.status ? state.player.status : "stopped"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCurrentSong: (song) => dispatch(requestCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    stopSong: () => dispatch(stopSong()),
    pauseSong: () => dispatch(pauseSong()),
    updateTime: (current, remaining) => dispatch(updateTime(current, remaining))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
