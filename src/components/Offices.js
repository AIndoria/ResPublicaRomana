import React, { Component } from "react";
import "./styles/Offices.css";
import Offices_Sidebar from "./Offices_sidebar.js";
import Offices_Card from "./Offices_card.js";
import Dictator_Sulla from "./images/Dictator_Sulla.jpg";
import Consul_Cicero from "./images/Consul_Cicero.jpg";
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
          </div>
          <Offices_Sidebar></Offices_Sidebar>
          <div className="Offices__Landing__Content">
            <Switch>
              <Route path="/offices/dictator">
                <Offices_Card
                  officeHeading="VACANT"
                  officeSubHeading="Last Held By: SYLLA"
                  officePicture={Dictator_Sulla}
                  officeDescription="A consul or (in emergency situations) praetor can appoint a dictator; this proposal can not be vetoed. Rome's first dictator was Aulus Postumius Albinus, who was appointed in the first decade of the fifth century BCE, when the Latin allies revolted. "
                  officeDescriptionSub="A dictatorship lasts 6 months and has to be renewed upon the approval of the Senate. A dictator(Master of the infantry: Magister Populi) often appoints a Master of the horse, Magister Equitum."
                ></Offices_Card>
              </Route>
              <Route path="/offices/consul">
                <Offices_Card
                  officeHeading="M•TVLLIVS•CICERO"
                  officeSubHeading="Co-Consul: C•M•F•Antonius"
                  officePicture={Consul_Cicero}
                  officeDescription="Two men are elected by the Comitia centuriata, one of the three voting assemblies of the people. The consuls serve for only one year (to prevent corruption) and can only rule when they agree, because each consul can veto the other one's decision."
                  officeDescriptionSub="They also command the Roman army (both have two legions) and exercise the highest juridical power in the Roman empire."
                ></Offices_Card>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Offices;
