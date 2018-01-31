import { connect } from 'react-redux';
import { requestSingleTrack, deleteTrack } from '../../actions/track_actions';
import { requestCurrentSong, playSong, pauseSong, addPlaylist } from '../../actions/player_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchSingleUser } from '../../actions/user_actions';
import {showModal} from '../../modal/actions_reducers';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => {
  let comments = Object.keys(state.entities.comments).length === 0 ? null : state.entities.comments;
  return {
    currentUser: state.session.currentUser,
    author: state.entities.users[ownProps.match.params.userId],
    track: state.entities.tracks[ownProps.match.params.trackId] ? state.entities.tracks[ownProps.match.params.trackId].track : undefined,
    headUser: ownProps.match.params.userId,
    trackId: ownProps.match.params.trackId,
    comments: comments,
    status: state.player.status,
    currentSong: state.player.currentSong,
    playlist: state.playlist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleTrack: (id) => dispatch(requestSingleTrack(id)),
    fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    showModal: (comp) => dispatch(showModal(comp)),
    requestCurrentSong: (song) => dispatch(requestCurrentSong(song)),
    fetchComments: (id) => dispatch(fetchComments(id)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    addPlaylist: (song)=>dispatch(addPlaylist(song))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
