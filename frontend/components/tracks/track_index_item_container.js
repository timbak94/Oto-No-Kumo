import { connect } from 'react-redux';
import {
  requestCurrentSong,
  playSong,
  pauseSong,
  seekSong,
  removePlaylist
} from '../../actions/player_actions';
import { fetchSingleUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';
import TrackIndexItem from './track_index_item';

export const mapStateToProps = (state, ownProps) => {
  let author;
  author = state.entities.users[ownProps.track.author_id];
  return {
    track: ownProps.track,
    style: ownProps.style,
    currentSong: state.player.currentSong,
    status: state.player.status,
    author: author
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    requestCurrentSong: (song) => dispatch(requestCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    removePlaylist: (song) => dispatch(removePlaylist(song))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
