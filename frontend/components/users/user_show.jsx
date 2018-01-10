import React from "react";
import { Link, withRouter } from 'react-router-dom';
import TrackIndex from '../tracks/track_index';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracksSelect: "user-show-selected",
      commentedSelect: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user) {
      if (nextProps.match.path === "/users/:userId") {
        if (parseInt(nextProps.match.params.userId) !== this.props.user.id) {
          this.props.fetchSingleUser(nextProps.match.params.userId);
        }
      }
    }
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.headUser);
  }

  trackIndex() {
    return (
      this.props.user.user_tracks.map(track => (
        <Link to={`/tracks/${this.props.user.id}/${track.id}`}>
          <li key={track.id} >{track.title}</li>
        </Link>
      ))
    );
  }

  handleClick(target) {
    if (target === "tracksSelect") {
      this.setState({[target]: "user-show-selected", commentedSelect: ""});
    } else {
      this.setState({[target]: "user-show-selected", tracksSelect: ""});
    }
  }

  whichIndex() {
    if (this.state.tracksSelect === "user-show-selected") {
      return (<TrackIndex tracks={this.props.user.user_tracks} style={"big-list"}/>);
    } else {
      return null;
    }
  }

  render() {
    if (this.props.user) {
      return (
        <section>
          <ul className="profile-user-box" >
            <img className="profile-avatar" src={this.props.user ? this.props.user.avatar_url : null}></img>
            <section className="section-username">
              <h1> {this.props.user ? this.props.user.username : null} </h1>
            </section>
          </ul>
          <nav className="profile-nav">
            <ul>
              <li className={`${this.state.tracksSelect} user-index-setter`} onClick={(e) => {e.preventDefault(), this.handleClick("tracksSelect")}}> Tracks </li>
              <li className={`${this.state.commentedSelect} user-index-setter`} onClick={(e)=> {e.preventDefault(), this.handleClick("commentedSelect")}}> Commented </li>
            </ul>
            {this.whichIndex()}
          </nav>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(UserShow);
