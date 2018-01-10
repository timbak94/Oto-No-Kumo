import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      track_id: this.props.trackId,
      body: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let comment = this.state;
    this.props.newComment(comment);
  }

  update(e) {
    this.setState({body: e.currentTarget.value});
  }

  render() {
    if (this.props.trackId) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <section>
              <input type="text" value={this.state.body} onChange={this.update} placeholder="Comment"></input>
            </section>
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CommentForm;
