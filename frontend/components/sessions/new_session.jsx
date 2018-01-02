import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NewSessionForm extends React.Component {
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
        <section className="modal-screen"></section>
        <form onSubmit={this.handleSubmit} className="SignUpForm">
          <h1> Log Into your Oto no Kumo Account </h1>
          {this.renderErrors()}
          <div className="SignUpFields">
            <label> Username
              <input type="text" value={this.state.username} onChange={this.update('username')} className="signup-input" />
            </label>
            <br/>
            <label> Password
              <input type="password" value={this.state.password} onChange={this.update('password')} className="signup-input" />
            </label>
            <input type="submit" value="Log In!" />
          </div>
          Trying to <Link to='/signUp'>sign up?</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(NewSessionForm);
