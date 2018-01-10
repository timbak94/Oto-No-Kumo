import { connect } from 'react-redux';
import { requestCurrentSong,
  playSong,
  stopSong,
  pauseSong,
  updateTime,
  seekSong,
  clearSeek
 } from '../../actions/player_actions';
import { fetchSingleUser } from '../../actions/user_actions';
import MusicPlayer from './music_player';

const mapStateToProps = (state, ownProps) => {
  let showSong = null;
  let author;
  if (state.player.currentSong) {
    author = state.entities.users[state.player.currentSong.author_id];
  }
  return {
    song: state.player.currentSong ? state.player.currentSong : null,
    current: state.player.current ? state.player.current : null,
    remaining: state.player.remaining ? state.player.remaining : null,
    show: showSong,
    status: state.player.status ? state.player.status : "stopped",
    author: author ? author : null,
    seek: state.player.seek
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCurrentSong: (song) => dispatch(requestCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    stopSong: () => dispatch(stopSong()),
    pauseSong: () => dispatch(pauseSong()),
    seekSong: (time) => dispatch(seekSong(time)),
    clearSeek: () => dispatch(clearSeek()),
    updateTime: (current, remaining) => dispatch(updateTime(current, remaining)),
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
