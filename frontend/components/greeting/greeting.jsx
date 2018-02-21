import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
  }

  personalGreeting() {
    return (
      <nav className="navbar-container animated fadeInTop">
        <ul className="navbar">
          <li>
            <Link to="/home">
              <i className="fa fa-mixcloud" id="logo" aria-hidden="true"></i>
            </Link>

          </li>
          <li id="nav-indent" >
            <div id="home-coll"></div>
            <Link to="/home"  className="nav-link">Home</Link>
          </li>
          <li id="nav-indent">
            <div id="home-coll"></div>
            <Link to="/collection"  className="nav-link">Collection</Link>
          </li>
          <li>
            <div id="search-marg"></div>
            <form>
              <input type="text" id="search" disabled="disabled"/>
            </form>
          </li>
          <li>
            <div id="home-coll"></div>
            <Link to="/upload" className="nav-link">Upload</Link>
          </li>
          <li id="prof">
            <img src={this.props.currentUser.avatar_url} className="avatar"/>
            <Link to={`/users/${this.props.currentUser.id}`} className="nav-link">{this.props.currentUser.username}</Link>
          </li>
          <li>
            <button className="header-button" onClick={this.handleLogOut}>Log Out</button>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      this.props.currentUser ? this.personalGreeting() : null
    );
  }
}

export default withRouter(Greeting);
