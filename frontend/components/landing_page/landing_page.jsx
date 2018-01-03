import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Slideshow from './slideshow';

class LandingPage extends React.Component {

  render() {
    return (
      <section className="landing">
        <nav>
          <ul>
            <li className="landing-logo">
              <i className="fa fa-mixcloud" id="landing-logo" aria-hidden="true"></i>
              <h1>Oto no Kumo</h1>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          <Slideshow />
        </nav>
        
      </section>
    );
  }

}

export default withRouter(LandingPage);
