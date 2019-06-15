import React, { Component } from "react";
import Landing from "./components/Landing.js";
import Header from "./components/Header.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <Landing className="Landing" />
      </div>
    );
  }
}

export default App;
