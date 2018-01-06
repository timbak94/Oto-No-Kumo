import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const GENRES = [
  "Rock",
  "Pop",
  "Hip Hip & Rap",
  "Electronic",
  "Jazz",
  "Piano",
  "Classical",
  "Idol",
  "Alternative Rock"
];
class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beforeLength: this.props.tracksLength,
      title: this.props.track.title,
      description: this.props.track.description,
      author_id: this.props.track.author_id,

      imageFile: null,

      image_url: this.props.track.image_url,
      song_url: this.props.track.song_url,

      genre: this.props.track.genre,
      message: "",
      visible: this.props.type === "new" ? "hidden" : "",
      slide: this.props.type === "edit" ? "fadeInDown" : "bounceInUp",
      modal: this.props.type === "edit" ? "fadeIn" : "hidden"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tracksLength !== this.state.beforeLength) {
      this.handleLeave();
      this.props.history.push(`/tracks/${this.state.author_id}/${parseInt(nextProps.lastTrackId)}`);
    }
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleLeave() {
    this.setState({slide: "bounceOutDown"});
    this.setState({modal: "fadeOut"});
    setTimeout(()=>{this.props.hideModal();}, 600);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[description]", this.state.description);
    formData.append("track[genre]", this.state.genre);
    formData.append("track[author_id]", this.state.author_id);
    if (this.state.imageFile) {
      formData.append("track[image]", this.state.imageFile);
    }
    if (this.props.type === "edit") {
      formData.append("id", this.props.track.id);
      this.props.editTrack(formData);
    } else if (this.props.type === "new") {
      formData.append("track[track_url]", this.props.track.track);
      this.props.newTrack(formData);
    }
  }

  renderErrors() {
    if (this.props.errors){
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, image_url: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className="track-form-container">
          <section className={`modal-screen animated ${this.state.modal} ${this.state.visible}`} onClick={(e) => (e.preventDefault(), this.handleLeave())}></section>
        <form onSubmit={this.handleSubmit} className={`track-form animated ${this.state.slide}`}>
          <h1> Add a track </h1>
          <h3>{this.renderErrors()}</h3>
          <img src={this.state.image_url} className={"track-cover"}></img>
          <div className="track-fields">
            <input type="file" onChange={this.updateFile} />
            <label> Title
              <input type="text" value={this.state.title} onChange={this.update('title')} className="track-form-title" />
            </label>
            <br/>
            <label> Description
              <input type="text" value={this.state.description} onChange={this.update('description')} className="track-form-description" />
            </label>
            <br></br>
            <label> Genre
              <select
                value={this.state.genre}
                onChange={this.update('genre')}
                defaultValue={"Genre"}
                >
                {GENRES.map((type, i) => {
                  return <option value={type} key={i}>{type}</option>;
                  })}
                </select>
            </label>
            <input type="submit" value={this.props.type === "edit" ? "Save changes" : "Save"} className="track-form-submit"/>
            <button onClick={(e) => (e.preventDefault(), this.handleLeave())} className="close-track-form">Cancel</button>
          </div>
        <br></br>
        </form>
      </div>
    );
  }
}

export default withRouter(TrackForm);
