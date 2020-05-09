import React, { Component } from "react";
import "./styles/Romans.css";
import RomansCard from "./RomansCard";

class Romans extends Component {
  render() {
    return (
      <div className="Romans__Landing">
        <div className="Romans__Landing--title title-text">How do I...</div>
        <div className="Romans__Landing__Splash">
          <div className="Romans__Landing__Splash-list">
            <ul>
              <li>Petition the Senate</li>
              <li>Find a government job</li>
              <li>Apply for grain under Lex Frumentaria</li>
              <li>Find my Lex Militaris allowance</li>
            </ul>
          </div>
          <div className="Romans__Landing__Splash-infobox">
            <p>
              civitat.es is your online guide to information and services
              provided by the Senate.
            </p>
            <p>Learn what you can do on this site ></p>
          </div>
        </div>
        <div className="Romans__Landing--subtitle title-text">
          Services for Roman Citizens
        </div>
        <div className="Romans__Landing--cards-container">
          <RomansCard
            heading="About SPQR"
            desc="Have a question about the SPQR? Learn where to find answers to the most requested facts about the Senate and the People of Rome."
          />
          <RomansCard
            heading="Benefits, Land Grants, Donations"
            desc="Learn about senatorial programs that provide financial and grain allotment for individuals."
          />
          <RomansCard
            heading="Businesses"
            desc="Learn the steps to start a business in Rome, get financing help from the government and private donors, and more."
          />
          <RomansCard
            heading="Disasters and Emergencies"
            desc="Learn how to prepare for and recover from disasters and emergencies."
          />
          <RomansCard
            heading="Elected Officials"
            desc="Find information for senatorial, provincial, and allied state agencies and elected officials."
          />
          <RomansCard
            heading="Education"
            desc="Find senatorial and provincial information on education including primary, secondary, and higher education."
          />
          <RomansCard
            heading="Housing"
            desc="Get information and services to help with finding and keeping a home in Roma, and land allocation of Graccus."
          />
          <RomansCard
            heading="Ius Honorarium"
            desc="Learn how to report a crime, locate a prisoner, research ius civile, and file a complaint against the senate."
          />
          <RomansCard
            heading="Military and Veterans"
            desc="Find information on Marian reforms, land and pay allotment for veterans and service members, joining the legions, and more."
          />
          <RomansCard
            heading="Voting and Elections"
            desc="Find answers to common questions about voting in the Republic and your rights."
          />
        </div>
      </div>
    );
  }
}

export default Romans;
