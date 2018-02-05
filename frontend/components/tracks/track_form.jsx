import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const GENRES = [
  "Rock",
  "Pop",
  "HipHop Rap",
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
      visible: this.props.type === "new" ? "" : "",
      slide: this.props.type === "edit" ? "fadeInDown" : "bounceInUp",
      modal: this.props.type === "edit" ? "fadeIn" : "fadeIn"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.whichButton  = this.whichButton.bind(this);
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

  showImage() {
    if (this.state.image_url) {
      return (<img src={this.state.image_url} className={"track-cover"}></img>);
    } else {
      return (<img className={"track-cover"}></img>);
    }
  }

  whichButton() {
    if (this.props.load) {
      return (<button className="load-holder" disabled> Processing <i id="spinner" class="fa fa-spinner" aria-hidden="true"></i> </button>);
    } else {
      return (<input type="submit" value={this.props.type === "edit" ? "Save changes" : "Upload!"} id="track-form-submit" />);
    }
  }

  render() {
    return (
      <div className="track-form-container">
          <section className={`modal-screen animated ${this.state.modal} ${this.state.visible}`} onClick={(e) => (e.preventDefault(), this.handleLeave())}></section>
        <form onSubmit={this.handleSubmit} className={`track-form animated ${this.state.slide}`}>
          <h1> {this.state.message} </h1>
          <div className="track-form-not-buttons">
            <div className="track-form-image">
              <div className="upload-btn-wrapper">
                {this.showImage()}
                <button className="real-avatar-button"> <i className="fa fa-camera" aria-hidden="true"></i> Update Image </button>
                <input className="file-button-avatar" type="file" accept=".png, .jpeg, .jpg" onChange={this.updateFile} />
              </div>
            </div>
            <h3>{this.renderErrors()}</h3>

            <div className="track-fields">
              <label> Title
                <div className="buffer" />
                <input placeholder="required *" type="text" value={this.state.title} onChange={this.update('title')} className="track-form-title" />
              </label>
              <div className="buffer" />
              <label> Genre
                <div className="buffer" />
                <select
                  value={this.state.genre}
                  onChange={this.update('genre')}
                  defaultValue={"Rock"}
                  >
                  <option value="genre" disabled="disabled">Genre</option>
                  {GENRES.map((type, i) => {
                    return <option value={type} key={i}>{type}</option>;
                    })}
                  </select>
              </label>
              <div className="buffer" />
              <label> Description
                <div className="buffer" />
                <textarea placeholder="required *" type="text" onChange={this.update('description')} className="track-form-description">{this.state.description}</textarea>
              </label>
              <div className="buffer" />
              </div>
          </div>
          <div className="track-bottom-buttons">
            <button onClick={(e) => (e.preventDefault(), this.handleLeave())} className="close-track-form">Cancel</button>
            {this.whichButton()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(TrackForm);
