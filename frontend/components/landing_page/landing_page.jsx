import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Slideshow from './slideshow';
import NewSessionContainer from '../sessions/new_session_container';
import NewUserContainer from '../users/new_user_container';
import { hideModal } from '../../modal/actions_reducers'

class LandingPage extends React.Component {

  render() {
    return (
      <section className="landing">
        <nav>
          <section className="landing-logo">
            <i className="fa fa-mixcloud" id="landing-logo" aria-hidden="true"></i>
            <h1 id="logo-name">OTO NO KUMO</h1>
          </section>
          <ul>
            <li>
              <button onClick={(e) => {e.preventDefault(), this.props.showModal(<NewSessionContainer hideModal={hideModal}/>)}}>Login</button>
            </li>
            <li>
              <button id="signup-button" onClick={(e) => {e.preventDefault(), this.props.showModal(<NewUserContainer hideModal={hideModal}/>)}}>Create Account</button>
            </li>
          </ul>
        </nav>
        <Slideshow />

      </section>
    );
  }

}

export default withRouter(LandingPage);
