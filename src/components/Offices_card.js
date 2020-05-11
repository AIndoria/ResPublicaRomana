import React, { Component } from "react";
import "./styles/Offices_card.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Offices_Card extends Component {
  render() {
    return (
      <div className="Offices_Card">
        <div className="Offices_Card-picture">
          <img src={this.props.officePicture}></img>
        </div>
        <div className="Offices_Card-text-container">
          <div className="Offices_Card-heading">
            <div>{this.props.officeHeading}</div>
            <div>{this.props.officeSubHeading}</div>
          </div>
          <div className="Offices_Card-description">
            <p>{this.props.officeDescription}</p>
            <p>{this.props.officeDescriptionSub}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Offices_Card;
