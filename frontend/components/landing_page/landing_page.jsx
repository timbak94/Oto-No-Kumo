import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Slideshow from './slideshow';
import NewSessionContainer from '../sessions/new_session_container';
import NewUserContainer from '../users/new_user_container';
import { hideModal } from '../../modal/actions_reducers';
import TrackIndex from '../tracks/track_index';

class LandingPage extends React.Component {

  componentDidMount() {
    if (!this.props.tracks) {
      this.props.fetchSingleUser(1);
    }
  }

  render() {
    if (this.props.tracks) {
      return (
        <section>
          <section className="landing">
            <nav>
              <section className="landing-logo">
                <i className="fa fa-mixcloud" id="landing-logo" aria-hidden="true"></i>
                <h1 id="logo-name">OTO NO KUMO</h1>
              </section>
              <ul>
                <li>
                  <button onClick={(e) => {e.preventDefault(), this.props.showModal(<NewSessionContainer hideModal={hideModal}/>)}}>Login / Guest Login</button>
                </li>
                <li>
                  <button id="signup-button" onClick={(e) => {e.preventDefault(), this.props.showModal(<NewUserContainer hideModal={hideModal}/>)}}>Create Account</button>
                </li>
              </ul>
            </nav>
            <Slideshow />
          </section>
          <h1 className="landing-message">Check out some songs selected by our Admins!</h1>
          <TrackIndex tracks={this.props.tracks} style={"home-page"}/>
        </section>
      );
    } else {
      return null;
    }
  }

}

export default withRouter(LandingPage);
