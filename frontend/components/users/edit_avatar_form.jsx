import React from 'react';

class EditAvatarForm extends React.Component {
  constructor() {
    this.state = {
      avatarFile: null,
      avatarUrl: null,
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    const formDate = new FormData();
    formData.append("user[avatar]", this.state.avatarFile);
    this.props.editAvatar(formData);
  }

  handleLeave() {
    this.setState({slide: "fadeOutUp"});
    this.setState({modal: "fadeOut"});
    setTimeout(()=>{this.props.hideModal();}, 700);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({avatarFile: file, avatarUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataUrl(file);
    }
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <a onClick={this.handleLeave}>X</a>
        <h1> Edit your avatar </h1>
        <input type="file" onChange={this.updateFile}/>
        <img src={this.state.imageUrl}/>
      </form>
    );
  }
}

export default EditAvatarForm;
