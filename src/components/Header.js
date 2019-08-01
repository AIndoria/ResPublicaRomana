import React, { Component } from "react";
import "./styles/Header.css";
import spqrlogo from "./images/SPQR.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__logo">
          <Link exact to="/">
            <img
              src={spqrlogo}
              alt="Roman Republic Insignia"
              className="Header__logo-logo"
            />
          </Link>
          <div className="Header__logo-text">
            <span>SENATVS</span>
            <span>POPVLVSQVE</span>
            <span>ROMANVS</span>
          </div>
        </div>
        <div className="nav">
          <div className="nav__topbar">
            <button className="nav__topbar-search button">SEARCH</button>
            <button className="nav__topbar-login button">PETITIONERS</button>
          </div>
          <div className="nav__main-nav">
            <ul>
              <li>
                <Link
                  to="/romans"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  ROMANS
                </Link>
              </li>
              <li>
                <Link
                  to="/barbarians"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  BARBARIANS
                </Link>
              </li>
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
