import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Slideshow from './slideshow';
import NewSessionContainer from '../sessions/new_session_container';
import NewUserContainer from '../users/new_user_container';

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
              <button onClick={ this.props.showModal(<NewSessionContainer />)}>Login</button>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
          <Slideshow />
        </nav>

      </section>
    );
  }

}

export default withRouter(LandingPage);
