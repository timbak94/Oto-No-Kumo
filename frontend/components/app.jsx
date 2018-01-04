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
import ModalComponent from '../modal/modal_component';

const App = () => {
  return(
    <div>
      <header>
        <GreetingContainer />
      </header>
      <section className="main-body">

        <ModalComponent />
        <Switch>
          <Route path="/welcome" component={LandingPageContainer}/>
          <Route path="/home"/>
          <Route path="/collection"/>
        </Switch>
      </section>
    </div>
  );
};

export default App;
