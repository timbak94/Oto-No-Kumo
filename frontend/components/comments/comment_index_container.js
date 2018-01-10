import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (store, ownProps) => {
  let comment_ids = [];
  store.entities.tracks[parseInt(ownProps.id)].comments.forEach ((el) => {
    comment_ids.push(el);
  });
  let comments = [];
  comment_ids.forEach ((el) => {
    if (store.entities.comments[el]) {
      comments.push(store.entities.comments[el]);
    }
  });
  return {
    comments: comments,
    trackId: ownProps.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComments: (id) => dispatch(fetchComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
