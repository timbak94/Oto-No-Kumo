import { connect } from 'react-redux';
import Home from './home.jsx';
import { requestSingleTrack, deleteTrack } from '../../actions/track_actions';


const mapStateToProps = (state) => {
  return {
    state:state
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
  };
};


export default connect(null, null)(Home);
