import React, { Component } from "react";
import "./styles/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        Landing Page
        <div className="Landing__Main" />
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
