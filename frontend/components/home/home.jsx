import React from 'react';
import { withRouter } from 'react-router-dom'


class Home extends React.Component {
  render() {
    return (
      <section>
        <div> TEMP STUFF WOWWWWW</div>
        <h3> check out this sweet piano cover of the opening for Code Geass </h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aFzeMMgHaLQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      </section>
    )
  }
}

export default withRouter(Home);
