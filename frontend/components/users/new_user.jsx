import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      slide: "bounceInDown",
      modal: "fadeIn",
      errors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.handleLeave();
      this.props.history.push("/home");
    }
  }


  componentDidMount() {
    this.props.clearErrors();
  }

  handleLeave() {
    this.setState({slide: "fadeOutUp"});
    this.setState({modal: "fadeOut"});
    setTimeout(()=>{this.props.hideModal();}, 700);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signUpUser(user);
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

  render() {
    return (
      <div className="sign-form-container">
        <section className={`modal-screen animated ${this.state.modal}`} onClick={(e) => (e.preventDefault(), this.handleLeave())}><div id="closingx">x</div></section>
        <form onSubmit={this.handleSubmit} className={`SignUpForm animated ${this.state.slide}`}>
          <h1> Create your Oto no Kumo Account </h1>
          <h3>{this.renderErrors()}</h3>
          <div className="SignUpFields">
            <label>
              <br></br>
              <input type="text" value={this.state.username} onChange={this.update('username')} className={`signup-input ${this.state.errors}`} placeholder="Choose A Username"/>
            </label>
            <br/>
            <label>
              <br></br>
              <input type="password" value={this.state.password} onChange={this.update('password')} className={`signup-input ${this.state.errors}`} placeholder="Choose A Password"/>
            </label>
            <br></br>
            <input type="submit" value="Sign Up!" className="submit-button"/>
          </div>
        <br></br>
      </form>
      </div>
    );
  }
}

export default withRouter(NewUserForm);
