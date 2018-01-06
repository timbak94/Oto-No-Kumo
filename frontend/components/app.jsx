import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NewSessionContainer from './sessions/new_session_container';
import GreetingContainer from './greeting/greeting_container';
import NewUserContainer from './users/new_user_container';
import LandingPageContainer from "./landing_page/landing_page_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';
import TrackShowContainer from './tracks/track_show_container';
import ModalContainer from '../modal/modal_container';
import UploadContainer from './tracks/upload_container';

const App = () => {
  return(
    <div>
      <ModalContainer />
      <header>
        <GreetingContainer />
      </header>
      <section className="main-body">
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/welcome"/>
            )
          }/>
          <AuthRoute path="/welcome" component={LandingPageContainer}/>
          <ProtectedRoute path="/home" component={HomeContainer}/>
          <ProtectedRoute path="/tracks/:userId/:trackId" component={TrackShowContainer}/>
          <Route path="/collection"/>
        </Switch>
        <ProtectedRoute path="/upload" component={UploadContainer}/>
      </section>
    </div>
  );
};

export default App;
