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

const App = () => {
  return(
    <div>
      <header>
        <GreetingContainer />
      </header>
      <section className="main-body">
        <Switch>
          <Route path="/welcome" component={LandingPageContainer}/>
          <Route path="/login" component={NewSessionContainer}/>
          <Route path="/signup" component={NewUserContainer} />
          <Route path="/home"/>
          <Route path="/collection"/>
        </Switch>
      </section>
    </div>
  );
};

export default App;
