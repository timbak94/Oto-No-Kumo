import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      track_id: this.props.trackId,
      body: "",
      placeholder: "Comment"
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = this.state;
    this.props.newComment(comment);
    this.setState({body: "", placeholder: "Submitted!"});
  }

  update(e) {
    this.setState({body: e.currentTarget.value});
  }

  render() {
    if (this.props.trackId) {
      return (
        <section className={`comment-form-container${this.props.style}`}>
          <section className={`comment-form${this.props.style}`}>
            <img className={`comment-form-avatar${this.props.style}`} src={this.props.currentUser.avatar_url}/>
            <form onSubmit={this.handleSubmit}>
              <section>
                <input type="text" value={this.state.body} onChange={this.update} placeholder={this.state.placeholder}></input>
              </section>
            </form>
          </section>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default CommentForm;
