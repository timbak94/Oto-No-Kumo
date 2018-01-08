import { connect } from 'react-redux';
import { requestTrackEdit, requestNewTrack } from '../../actions/track_actions';
import { clearErrors } from '../../actions/session_actions';
import TrackForm from './track_form';

const mapStateToProps = (state, ownProps) => {
  let type = "new";
  let track = {
    author_id: state.session.currentUser.id,
    title: "",
    description: "",
    genre: "",
    image_url: "",
    song_url: "",
    track: ownProps.trackFile};

  if (ownProps.type) {
    type = "edit";
    track = state.entities.tracks[ownProps.trackId];
  }
  let keys = Object.keys(state.entities.tracks);
  let lastId;
  if (keys.length > 0) {
    lastId = keys[keys.length - 1];
  }
  return {
    type: type,
    track: track,
    tracksLength: keys.length,
    lastTrackId: lastId
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editTrack: (id) => { dispatch(requestTrackEdit(id));},
    newTrack: (track) => { dispatch(requestNewTrack(track));},
    clearErrors: () => dispatch(clearErrors()),
    hideModal: ()=> dispatch(ownProps.hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
