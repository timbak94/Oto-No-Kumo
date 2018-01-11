import React from 'react';
import TrackIndex from '../tracks/track_index';

class Collection extends React.Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.fetchSingleUser(this.props.currentUser.id);
    }
  }

  render() {
    if (this.props.user) {
      return (
        <section className="collection-container">
          <h1> Your Published Tracks </h1>
          <TrackIndex tracks={this.props.user.user_tracks} style={"big-list"}/>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Collection;
