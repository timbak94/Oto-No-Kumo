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
        <div> TEMP STUFF WOWWWWW</div>
      </section>
    );
  }
}

export default withRouter(Home);
