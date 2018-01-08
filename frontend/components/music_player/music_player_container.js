import { connect } from 'react-redux';
import { requestCurrentSong,
  playSong,
  stopSong,
  pauseSong }from '../../actions/player_actions';
import MusicPlayer from './music_player';

const mapStateToProps = (state, ownProps) => {
  let showSong = null;
  return {
    song: state.player.currentSong ? state.player.currentSong : null,
    show: showSong,
    status: state.player.status ? state.player.status : "stopped"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCurrentSong: (song) => dispatch(requestCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    stopSong: () => dispatch(stopSong()),
    pauseSong: () => dispatch(pauseSong())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
