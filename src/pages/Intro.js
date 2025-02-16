import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Intro.css";
import "./Pages.css";

export default function Intro() {
  const introRef = useNav("Intro");

  const logoImage = "/images/logo2.png";
  const selfie = "/images/selfie.jpg";

  return (
    <section ref={introRef} id="introContainer" className="Fill">
      <div className="Header">
        <img
          className="Logo"
          src={process.env.PUBLIC_URL + logoImage}
          alt="Jonathan Lin's Logo"
        ></img>
        <div className="HeaderText">
          <h3>4th Year CS Student at UWaterloo | Graduating 2026</h3>
          <h5>Seeking Summer and Fall 2025 Opportunities</h5>
        </div>
      </div>
      <div className="IntroContent">
        <img
          className="Selfie"
          src={process.env.PUBLIC_URL + selfie}
          alt="Jonathan Lin himself"
        ></img>
        <div className="Intro">
          <div className="IntroText">
            <h1>Hi there,</h1>
            <h1>My name is Jonathan Lin.</h1>
          </div>
          <div className="ButtonField">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1XFNOHm3yTJivI0231XoyQlJQdxtpPY2C/view?usp=sharing"
                )
              }
            >
              Resume
            </button>
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/jonathan-lin-1104/")
              }
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          document
            .getElementById("aboutContainer")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="Arrow"
      >
        ↓
      </button>
    </section>
  );
}
