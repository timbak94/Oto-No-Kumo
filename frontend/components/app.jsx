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
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return(
    <div>
      <header>
        <GreetingContainer />
      </header>
      <Switch>
        <Route path="/login" component={NewSessionContainer}/>
        <Route path="/signup" component={NewUserContainer} />
      </Switch>
    </div>
  );
};

export default App;