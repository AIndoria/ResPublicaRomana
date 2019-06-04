import React, { Component } from "react";
import "./styles/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="Splash" />
        <div className="Landing__News" />
        <div className="Landing__Sidebar" />
      </div>
    );
  }
}

export default Landing;
