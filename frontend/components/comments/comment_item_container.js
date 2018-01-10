import { connect } from 'react-redux';
import { fetchSingleUser } from '../../actions/user_actions';
import CommentItem from './comment_item';

const mapStateToProps = (store, ownProps) => {
  let author;
  author = store.entities.users[ownProps.comment.author_id];
  return {
    comment: ownProps.comment,
    author: author
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentItem);
