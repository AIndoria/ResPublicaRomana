import React, { Component } from "react";
import "./styles/Header.css";
import spqrlogo from "./images/SPQR.svg";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__logo">
          <img
            src={spqrlogo}
            alt="Roman Republic Insignia"
            className="Header__logo__logo"
          />
          <div className="Header__logo__text">
            <span>SENATVS</span>
            <span>POPVLVSQVE</span>
            <span>ROMANVS</span>
          </div>
        </div>
        <div className="nav">
          <div className="nav__topbar">
            <button className="nav__topbar__search button">SEARCH</button>
            <button className="nav__topbar__login button">PETITIONERS</button>
          </div>
          <div className="nav__main-nav">
            <ul>
              <li>ROMANS</li>
              <li>BARBARIANS</li>
              <li>OFFICES</li>
              <li>PROVINCES</li>
              <li>EVENTS</li>
              <li>ABOUT</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
