import { connect } from 'react-redux';
import { requestSingleTrack, deleteTrack } from '../../actions/track_actions';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    track: state.entities.tracks[ownProps.match.params.trackId],
    headUser: ownProps.match.params.userId,
    trackId: ownProps.match.params.trackId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleTrack: (id) => dispatch(requestSingleTrack(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
