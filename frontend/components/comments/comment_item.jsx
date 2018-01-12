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
        <section className={"animated slideInRight comment-item"}>
          <img className="comment-avatar" src={this.props.author.avatar_url}></img>
          <section>
            <Link to={`/users/${this.props.author.id}`}>
              <h3>{this.props.author.username}</h3>
            </Link>
            <h2>{this.props.comment.body}</h2>
          </section>
        </section>
      );
    } else {
      return null;
    }
  }

}

export default withRouter(CommentItem);
