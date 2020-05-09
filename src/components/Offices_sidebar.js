import React, { Component } from "react";
import "./styles/Offices_sidebar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

class Offices_sidebar extends Component {
  render() {
    return (
      <div className="Offices__sidebar-Landing">
        <div className="Offices__sidebar-list">
          <ul>
            <li>
              <Link
                to="/offices/dictator"
                style={{ textDecoration: "none", color: "black" }}
              >
                Office of Dictator
              </Link>
            </li>
            <li>
              <Link
                to="/offices/consul"
                style={{ textDecoration: "none", color: "black" }}
              >
                Office of Consuls
              </Link>
            </li>
            <li>Office of Governor</li>
            <li>Office of Censor</li>
            <li>Office of Praetor</li>
            <li>Office of Aedile</li>
            <li>Office of Quaestor</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Offices_sidebar;
