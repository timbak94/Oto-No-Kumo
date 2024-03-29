import React from 'react';
import { withRouter } from 'react-router-dom';
import ChartContainer from './charts_container';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      genre: "Electronic"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({genre:e.target.innerText});
  }

  whichChart() {
    return (
      <ChartContainer genre={this.state.genre}/>
    );
  }

  render() {
    return (
      <section className="home-container">
        <section className={`home-message-container ${this.state.genre === "Alternative Rock" ? "Alternative-Rock" : this.state.genre}`}>
          <h1>TOP CHARTS</h1>
          <h2>{this.state.genre}</h2>
          <p1></p1>
        </section>
        <nav>
          <ol className="charts-genre">
            <li onClick={this.handleClick} className={this.state.genre === "Electronic" ? "home-show" : ""}>Electronic</li>
            <li onClick={this.handleClick} className={this.state.genre === "Rock" ? "home-show" : ""}>Rock</li>
            <li onClick={this.handleClick} className={this.state.genre === "Pop" ? "home-show" : ""}>Pop</li>
            <li onClick={this.handleClick} className={this.state.genre === "Alternative Rock" ? "home-show" : ""}>Alternative Rock</li>
            <li onClick={this.handleClick} className={this.state.genre === "HipHop Rap" ? "home-show" : ""}>HipHop Rap</li>
            <li onClick={this.handleClick} className={this.state.genre === "Jazz" ? "home-show" : ""}>Jazz</li>
            <li onClick={this.handleClick} className={this.state.genre === "Piano" ? "home-show" : ""}>Piano</li>
            <li onClick={this.handleClick} className={this.state.genre === "Classical" ? "home-show" : ""}>Classical</li>
            <li onClick={this.handleClick} className={this.state.genre === "Idol" ? "home-show" : ""}>Idol</li>
          </ol>
        </nav>
        {this.whichChart()}
      </section>
    );
  }
}

export default withRouter(Home);
