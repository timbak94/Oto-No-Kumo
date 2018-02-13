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
        <div className="comments-container">
          <h1> <i className="fa fa-comment" aria-hidden="true"></i>  Comments </h1>
          {this.props.comments.reverse().map(comment => (
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
