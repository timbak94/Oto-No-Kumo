import React from 'react';
import { Link, withRouter } from 'react-router-dom';
class CommentItem extends React.Component {
  componentDidMount() {
    if (!this.props.author) {
      this.props.fetchSingleUser(this.props.comment.author_id);
    }
  }

  render() {
    if (this.props.author) {
      return (
        <section className={"animated slideInRight"}>
          <h2>{this.props.comment.body}</h2>
          <h3>{this.props.author.username}</h3>
        </section>
      );
    } else {
      return null;
    }
  }

}

export default withRouter(CommentItem);
