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
import HomeContainer from './home/home_container'
import ModalContainer from '../modal/modal_container';

const App = () => {
  return(
    <div>
      <ModalContainer />
      <header>
        <GreetingContainer />
      </header>
      <section className="main-body">

        <Switch>
          <AuthRoute path="/welcome" component={LandingPageContainer}/>
          <ProtectedRoute path="/home" component={HomeContainer}/>
          <Route path="/collection"/>
        </Switch>
      </section>
    </div>
  );
};

export default App;
