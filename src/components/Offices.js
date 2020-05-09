import React, { Component } from "react";
import "./styles/Offices.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Offices extends Component {
  render() {
    return (
      <div className="Offices__Landing">
        <div className="Offices__Title">
          <div className="Offices__Title-text">
            Senatorial Offices of the Republic of Rome
          </div>
          <div className="Offices__Title-subtext">[placeholder]</div>
        </div>
        <div className="Offices__Sidebar">
          <div className="Offices__Sidebar-list">
            <ul>
              <li>Office of Dictator</li>
              <li>Office of Consuls</li>
              <li>Office of Governor</li>
              <li>Office of Censor</li>
              <li>Office of Praetor</li>
              <li>Office of Aedile</li>
              <li>Office of Quaestor</li>
            </ul>
          </div>
        </div>
        <div className="Offices__Landing__Content" />
      </div>
    );
  }
}

export default Offices;
