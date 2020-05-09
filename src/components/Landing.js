import React, { Component } from "react";
import "./styles/Landing.css";
import Militari from "./images/militari.jpg";
import Senate from "./images/senate.jpg";
import Capitalina from "./images/capitalina.jpg";
import Cato from "./images/cato.jpg";
import Art from "./images/art.jpg";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="Splash">
          <Carousel fade={true} controls={true} keyboard={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={Militari} alt="First slide" />
              <Carousel.Caption>
                <h3>Join the Roman Legions</h3>
                <p>
                  Yesterday for Today, Today for Tomorrow. Enlist at Your
                  Nearest Castrum
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Capitalina}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Visit The Capital</h3>
                <p>All Roads Lead To the Capital of the World</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Senate} alt="Third slide" />

              <Carousel.Caption>
                <h3>Attend the Next Session of Concilivm Plebis</h3>
                <p>Help Facilitate the Next Bill of Law</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="Landing__News">
          <div className="Landing__News-breaking">
            <div className="Landing__News-breaking-content">ACTA DIVRNA</div>
          </div>
          <div className="Landing__News-picture">
            <img src={Cato} alt="Cato" />
          </div>
          <div className="Landing__News-content">
            <h3 className="Landing__News-content__title">
              On the Punishment of the Catiline Conspirators
            </h3>
            <div className="Landing__News-content__desc">
              My feelings, conscript fathers, are extremely different when I
              contemplate our circumstances and dangers, and when I revolve in
              my mind the sentiments of some who have spoken before me. Those
              speakers, as it seems to me, have considered only how to punish
              the traitors who have raised war against their country, their
              parents, their altars, and their homes...
            </div>
          </div>
        </div>
        <div className="Landing__Sidebar">
          <Card bg="light">
            <Card.Header className="text-muted top-card">
              December 5, 691 AUC | dies Saturni Non. DCXCI AUC
            </Card.Header>
            <Card.Body>
              <Card.Title>
                Oratio in Catilinam Quarta in Senatu Habita
              </Card.Title>
              <Card.Text>
                Surprise in the Senate as Decimus Junius Silanus & Caius Iulius
                Caesar ask for a lesser penalty for Catilina. Cato rebuffs
                Caesar!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Header className="text-muted">
              November 15, 691 AUC | dies Solis a.d. XVII Kal. DCXCI AUC
            </Card.Header>
            <Card.Body>
              <Card.Title>Catiline and Manlius Declared Hostes</Card.Title>
              <Card.Text>
                Senate declares Catilina and Manlius public enemies; dates set
                for amnesty for deserters; Antonius directed to crush rebellion!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light">
            <Card.Header className="text-muted">
              November 8, 691 AUC | dies Solis a.d. VI Id. DCXCI AUC
            </Card.Header>
            <Card.Body>
              <Card.Title>Cicero's Scathing Remarks on Catilina</Card.Title>
              <Card.Text>
                O tempora o mores! Cicero delivers scalding oration against
                Catilina, accusing him of a conspiracy against the Republic!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="Landing__EndBanner">
          <div className="Landing__EndBanner-text">Banner Info Goes Here</div>
        </div>
        <div className="Landing__Agency">
          <div className="Landing__Agency-text">
            <ul>
              <li>Senate of the Roman Republic</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
