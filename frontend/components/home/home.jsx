import React from 'react';
import { withRouter } from 'react-router-dom';
import ChartContainer from './charts_container';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      genre: "Rock"
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
      <section>
        TOP CHARTS
        <nav>
          <ol className="charts-genre">
            <li onClick={this.handleClick} className={this.state.genre === "Rock" ? "home-show" : ""}>Rock</li>
            <li onClick={this.handleClick} className={this.state.genre === "Pop" ? "home-show" : ""}>Pop</li>
            <li onClick={this.handleClick} className={this.state.genre === "Alt Rock" ? "home-show" : ""}>Alternative Rock</li>
            <li onClick={this.handleClick} className={this.state.genre === "HHR" ? "home-show" : ""}>Hip Hop & Rap</li>
            <li onClick={this.handleClick} className={this.state.genre === "Elec" ? "home-show" : ""}>Electronic</li>
            <li onClick={this.handleClick} className={this.state.genre === "Jazz" ? "home-show" : ""}>Jazz</li>
            <li onClick={this.handleClick} className={this.state.genre === "Piano" ? "home-show" : ""}>Piano</li>
            <li onClick={this.handleClick} className={this.state.genre === "Classic" ? "home-show" : ""}>Classical</li>
            <li onClick={this.handleClick} className={this.state.genre === "Idol" ? "home-show" : ""}>Idol</li>
          </ol>
        </nav>
        {this.whichChart()}
      </section>
    );
  }
}

export default withRouter(Home);
