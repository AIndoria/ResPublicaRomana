import React, { Component } from "react";
import "./styles/BarbariansCard.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BarbariansCard extends Component {
  render() {
    return (
      <div className="BarbariansCard">
        <p>{this.props.heading}</p>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default BarbariansCard;
