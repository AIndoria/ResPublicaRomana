import React, { Component } from "react";
import "./styles/RomansCard.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RomansCard extends Component {
  render() {
    return (
      <div className="RomansCard">
        <p>{this.props.heading}</p>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default RomansCard;
