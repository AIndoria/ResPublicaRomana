import React, { Component } from "react";
import "./styles/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        Landing Page
        <div className="Landing__Main">
          <img src="https://picsum.photos/400/300" />
          <div class="Landing__Main__Content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="Landing__Side_1" />
        <div className="Landing__Side_2" />
        <div className="Landing__News" />
        <div className="Landing__Misc" />
        <div className="Landing__About" />
      </div>
    );
  }
}

export default Landing;
