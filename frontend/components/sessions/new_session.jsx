import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class NewSessionForm extends React.Component {
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
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    e.preventDefault();
    this.props.logInUser({username: "guest", password: "starwars"});
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
          <section className={`modal-screen animated ${this.state.modal}`}
            onClick={(e) => (e.preventDefault(), this.handleLeave())}>
            <div id="closingx">x</div>
          </section>
        <form onSubmit={this.handleSubmit} className={`SignUpForm animated ${this.state.slide}`}>
          <h3>{this.renderErrors()}</h3>
          <div className="SignUpFields">
            <label>
              <input placeholder="Your Username" type="text" value={this.state.username} onChange={this.update('username')} className={`signup-input ${this.state.errors}`} />
            </label>
            <br/>
            <label>
              <input type="password" placeholder="Your Password" value={this.state.password} onChange={this.update('password')} className={`signup-input ${this.state.errors}`} />
            </label>
            <input type="submit" value="Log In!" className="submit-button"/>
            <button onClick={this.handleClick} className="submit-button"> Guest Login</button>
          </div>
        <br></br>
        </form>
      </div>
    );
  }
}

export default withRouter(NewSessionForm);
