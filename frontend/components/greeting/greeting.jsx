import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// const sessionLinks = () => (
//   <span></span>
// );
//
//
// const personalGreeting = (currentUser, logout) => {
//
//     <nav className="navbar-container animated fadeInTop">
//       <ul className="navbar">
//         <li>
//           <Link to="/home">
//             <i className="fa fa-mixcloud" id="logo" aria-hidden="true"></i>
//           </Link>
//
//         </li>
//         <li>
//           <div id="home-coll"></div>
//           <Link to="/home"  id="nav-indent" className="nav-link">Home</Link>
//         </li>
//         <li>
//           <div id="home-coll"></div>
//           <Link to="/collection" id="nav-indent" className="nav-link">Collection</Link>
//         </li>
//         <li>
//           <div id="search-marg"></div>
//           <form>
//             <input type="text" id="search" placeholder="Search"/>
//           </form>
//         </li>
//         <li>
//           <div id="home-coll"></div>
//           <Link to="/upload" className="nav-link">Upload</Link>
//         </li>
//         <li id="prof">
//           <img src={currentUser.avatar_url} className="avatar"/>
//           <Link to={`/users/${currentUser.id}`} className="nav-link">{currentUser.username}</Link>
//         </li>
//         <li>
//           <button className="header-button" onClick={logout}>Log Out</button>
//         </li>
//       </ul>
//     </nav>
//
// }
//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

class Greeting extends React.Component {
  constructor(props) {
    super(props);
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
              <input type="text" id="search" placeholder="Search Doesn't Work...............................................yet. *X-files theme intesifies*"/>
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
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
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
