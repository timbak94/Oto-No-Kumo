import { connect } from 'react-redux';
import Home from './home.jsx';
import { requestSingleTrack, deleteTrack } from '../../actions/track_actions';

const mapStateToProps = () => {
  // return {
  //   rock: rock,
  //   pop: pop,
  //   alt: alt,
  //   rap: rap,
  //   elec: elec,
  //   jazz: jazz,
  //   piano: piano,
  //   classic: classic,
  //   idol: idol
  // };
};


const mapDispatchToProps = (dispatch) => {
  return {
    requestTrack: (id) => dispatch(requestSingleTrack(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
