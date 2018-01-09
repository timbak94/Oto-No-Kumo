import React from 'react';
import CommentItemContainer from './comment_item_container';

const CommentIndex = (props) => {
  return (
    <div>
    {props.comments.map(track => (
      <CommentItemContainer
      comment={comment}
      key={comment.id}
      />
    ))}
    </div>
  );
};

export default CommentIndex;
