import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/login">Login</Link>
    <br></br>
    <Link to="/signup">Sign up!</Link>
  </nav>
);


const personalGreeting = (currentUser, logout) => (
  <div className="navbar-container animated fadeInTop">
    <ul className="navbar">
      <li>
        <Link to="/home">
          <i className="fa fa-mixcloud" id="logo" aria-hidden="true"></i>
        </Link>

      </li>
      <li>
        <Link to="/home" className="nav-link">Home</Link>
      </li>
      <li>
        <Link to="/collection" className="nav-link">Collection</Link>
      </li>
      <li>
        <form>
          <input type="text"/>
        </form>
      </li>
      <li>
        <Link to="albums/new" className="nav-link">Upload</Link>
      </li>
      <li id="prof">
        <img src={currentUser.avatar_url} className="avatar"/>
        <Link to={`/users/${currentUser.id}`} className="nav-link">{currentUser.username}</Link>
      </li>
      <li>
        <button className="header-button" onClick={logout}>Log Out</button>
      </li>
    </ul>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
