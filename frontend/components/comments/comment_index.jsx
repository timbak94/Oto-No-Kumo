import React from 'react';
import CommentItemContainer from './comment_item_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.trackId);
  }

  render() {
    if (this.props.comments.length > 0) {
      return (
        <div >
          {this.props.comments.map(comment => (
            <CommentItemContainer
              comment={comment}
              key={comment.id}
              />
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CommentIndex;
