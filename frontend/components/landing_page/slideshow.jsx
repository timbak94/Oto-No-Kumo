import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_one: "",
      show_two: "",
      first_button: "checked",
      second_button: "unchecked"
    };
  }

  handleClick(target) {
    if (target === "second_button") {
      this.setState({"show_one": "slideRight"});
      this.setState({"first_button": "unchecked"});
      this.setState({"second_button": "checked"});
    } else {
      this.setState({"show_one": "slideLeft"});
      this.setState({"first_button": "checked"});
      this.setState({"second_button": "unchecked"});
    }
  }
  render() {
    return (
      <div className="slideshow">
        <section className={`slideshow-content animated ${this.state.show_one}`}>
          <section className="slide-one">
            <h1> ANIME MUSIC? WE GOT IT. </h1>

          </section>
          <section className="slide-two">
            <h1> NON-ANIME MUSIC? WE GOT IT TOO. </h1>
          </section>
        </section>
        <ul className="slideshow-nav">
          <li>
            <i
              className={`slide-button fa fa-circle ${this.state.first_button}`}
              id="landing-button"
              aria-hidden="true"
              onClick={(e) => (e.preventDefault(), this.handleClick("first_button"))}
              >

            </i>
          </li>
          <li>
            <i
              className={`slide-button fa fa-circle ${this.state.second_button}`}
              id="landing-button"
              aria-hidden="true"
              onClick={(e) => (e.preventDefault(), this.handleClick("second_button"))}
              >
            </i>
          </li>
        </ul>
      </div>
    );
  }

}

export default withRouter(Slideshow);
