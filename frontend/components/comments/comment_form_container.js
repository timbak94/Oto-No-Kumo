import { connect } from 'react-redux';
import { newComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (store, ownProps) => {
  return {
    currentUser: store.session.currentUser,
    trackId: ownProps.trackId
  };
};

const mapDispatchToProps = dispatch => ({
  newComment: (comment) => dispatch(newComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
