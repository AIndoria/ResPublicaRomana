import React, { Component } from "react";
import "./styles/Barbarians.css";
import BarbariansCard from "./BarbariansCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Barbarians extends Component {
  render() {
    return (
      <div className="Barbarians__Landing">
        <div className="Barbarians__Landing__Warning">
          <div className="Barbarians__Landing__Warning--heading">
            WARNING: RESTRICTIONS ON BARBARIANS
          </div>
          <div className="Barbarians__Landing__Warning--text">
            <p>
              Severe restrictions are placed upon Barbarians(i.e. Non-Romans)
              entering the territories of Republic of Rome without permission.
              Remember, Barbarians are barred from marrying Roman citizens, and
              in most cases, residents of Roman Territories, holding public
              offices, taking jobs which rightfully belong to the citizens, and
              enlisting in the legions.
            </p>
            <p>
              Barbarians are taxed heavily and most laws only apply to Roman and
              allied citizens. Permission may be granted by the Senate whereas
              needed. Barbarians are well advised to stay out.
            </p>
          </div>
        </div>
        <div className="Barbarians__Landing--title title-text">How do I...</div>
        <div className="Barbarians__Landing__Splash">
          <div className="Barbarians__Landing__Splash-list">
            <ul>
              <li>Petition the Senate</li>
              <li>Immigrate to Rome Proper</li>
              <li>Learn the class structure</li>
              <li>Find my tribal allowances</li>
            </ul>
          </div>
          <div className="Barbarians__Landing__Splash-infobox">
            <p>
              civitat.es is your online guide to information and services
              provided by the Senate.
            </p>
            <p>Learn what you can do on this site ></p>
          </div>
        </div>
        <div className="Barbarians__Landing--subtitle title-text">
          Services for Client State Citizens, Roman Tributaries, and Barbarians
        </div>
        <div className="Barbarians__Landing--cards-container">
          <BarbariansCard
            heading="About SPQR"
            desc="Have a question about the SPQR? Learn where to find answers to the most requested facts about the Senate and the People of Rome."
          />
          <BarbariansCard
            heading="Integration Benefits"
            desc="Learn about why being a part of the Roman Republic is best for your realm, and find benefits you can get from it."
          />
          <BarbariansCard
            heading="Taxes"
            desc="You are levied taxes for maintenance of the Roman Republic and its peacekeeping legions. Learn how to pay taxes to Rome."
          />
          <BarbariansCard
            heading="Latin"
            desc="Learn how to get used to the civilized language."
          />
          <BarbariansCard
            heading="Envoys"
            desc="Find information about Senatorial envoys sent to your client kingdom, tribe, or republic."
          />
          <BarbariansCard
            heading="Roman Education"
            desc="Find information on how to get proper Roman education including primary, secondary, and higher education."
          />
          <BarbariansCard
            heading="Immigration"
            desc="Find information on how to immigrate to the Republic, its provinces and client kingdoms."
          />
          <BarbariansCard
            heading="Ius Honorarium"
            desc="Learn how to report crimes against the Republic, report treasonous activity, and tax fraud."
          />
          <BarbariansCard
            heading="Peacekeeping Legions"
            desc="Find information on how Roman military keeps your realm secure from invading forces."
          />
          <BarbariansCard
            heading="Voting and Elections"
            desc="Find answers to common questions about how voting in your realm allows you to keep the Republic's interest at heart."
          />
        </div>
      </div>
    );
  }
}

export default Barbarians;
