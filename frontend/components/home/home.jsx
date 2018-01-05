import React from 'react';
import { withRouter } from 'react-router-dom';


class Home extends React.Component {

  handleClick(id) {
    this.props.requestTrack(id);
  }

  render() {
    return (
      <section>
        <br></br>
        <button onClick={(e) => { e.preventDefault(); this.handleClick(8);}} >TEST TRACK STATE 8</button>
        <button onClick={(e) => { e.preventDefault(); this.handleClick(9);}} >TEST TRACK STATE 9</button>
        <div> TEMP STUFF WOWWWWW</div>
        <h3> check out this sweet piano cover of the opening for Code Geass </h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aFzeMMgHaLQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      </section>
    );
  }
}

export default withRouter(Home);
