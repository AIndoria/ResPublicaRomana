import React, { Component } from "react";
import "./styles/Offices.css";
import Offices_Sidebar from "./Offices_sidebar.js";
import Offices_Card from "./Offices_card.js";
import Offices_Card_2 from "./Offices_card_2.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

class Offices extends Component {
  render() {
    return (
      <Router component={Offices}>
        <div className="Offices__Landing">
          <div className="Offices__Title">
            <div className="Offices__Title-text">
              Senatorial Offices of the Republic of Rome
            </div>
            <div className="Offices__Title-subtext">[placeholder]</div>
          </div>
          <Offices_Sidebar></Offices_Sidebar>
          <div className="Offices__Landing__Content">
            <Switch>
              <Route path="/offices/dictator" component={Offices_Card}></Route>
              <Route path="/offices/consul" component={Offices_Card_2} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Offices;
