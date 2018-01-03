import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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
        <section className="modal-screen"></section>
        <form onSubmit={this.handleSubmit} className="SignUpForm">
          <h1> Create your Oto no Kumo Account </h1>
          {this.renderErrors()}
          <div className="SignUpFields">
            <label> What should we call you?
              <input type="text" value={this.state.username} onChange={this.update('username')} className="signup-input" />
            </label>
            <br/>
            <label> Choose a password
              <input type="password" value={this.state.password} onChange={this.update('password')} className="signup-input" />
            </label>
            <input type="submit" value="Sign Up!" />
          </div>
          Trying to <Link to='/login'>login?</Link>
        <br></br>
        <Link to='/'>X</Link>
      </form>
      </div>
    );
  }
}

export default withRouter(NewUserForm);
