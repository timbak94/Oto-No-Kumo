import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NewSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      slide: "fadeInDown",
      modal: "fadeIn"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    setTimeout(()=>{this.props.hideModal()}, 700)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.logInUser(user);
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
          <section className={`modal-screen animated ${this.state.modal}`}></section>
        <form onSubmit={this.handleSubmit} className={`SignUpForm animated ${this.state.slide}`}>
          <h1> Log Into your Oto no Kumo Account </h1>
          <h3>{this.renderErrors()}</h3>
          <div className="SignUpFields">
            <label> Username
              <input type="text" value={this.state.username} onChange={this.update('username')} className="signup-input" />
            </label>
            <br/>
            <label> Password
              <input type="password" value={this.state.password} onChange={this.update('password')} className="signup-input" />
            </label>
            <input type="submit" value="Log In!" className="submit-button"/>
          </div>
        <br></br>
        <a onClick={(e) => (e.preventDefault(), this.handleLeave())} className="closing-x">X</a>
        </form>
      </div>
    );
  }
}

export default withRouter(NewSessionForm);
