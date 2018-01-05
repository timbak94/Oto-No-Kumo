import { connect } from 'react-redux';
import Home from './home.jsx';
import { requestSingleTrack, deleteTrack } from '../../actions/track_actions';



const mapDispatchToProps = (dispatch) => {
  return {
    requestTrack: (id) => dispatch(requestSingleTrack(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id))
  };
};


export default connect(null, mapDispatchToProps)(Home);
