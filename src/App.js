import React, { Component } from "react";
import Landing from "./components/Landing.js";
import Header from "./components/Header.js";
import Romans from "./components/Romans.js";
import Barbarians from "./components/Barbarians.js";
import Offices from "./components/Offices.js";
import Provinces from "./components/Provinces.js";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header className="Header" />
          <Route exact path="/" component={Landing} />
          <Route exact path="/romans" component={Romans} />
          <Route exact path="/barbarians" component={Barbarians} />
          <Route exact path="/offices" component={Offices} />
          <Route exact path="/provinces" component={Provinces} />
        </div>
      </Router>
    );
  }
}

export default App;
