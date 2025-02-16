import React from "react";
import { useNav } from "../customHooks/useNav";
import "./About.css";
import "./Pages.css";

export default function About() {
  const aboutRef = useNav("About");

  const spotifyIcon = "/images/spotify.png";
  const studyingImage = "/images/study.jpg";

  const paraOne =
    "Hi everyone! My name is Jonathan and I'm a Computer Science student at the University of Waterloo. Over my past co-ops, " +
    "I have led the development of multiple high-impact projects, such as an oil and gas pipeline prediction tool for areas of metal loss and a Microsoft Word Add-in to accelerate the creation of contracts for lawyers.";
  const paraTwo =
    "I love to learn, especially topics I am passionate about such as statistics, machine learning, and blockchain. " +
    "I also enjoy full-stack development and data science involving languages/frameworks such as Node.js, .NET, and Python.";
  const paraThree =
    "Besides work, I enjoy playing basketball and am an avid supporter of Jeremy Lin. In addition, I'm interested in digital design and love listening to music. Check out my playlists below!";
  return (
    <section ref={aboutRef} id="aboutContainer" className="Fill">
      <div className="AboutContent">
        <div className="AboutMe">
          <h1>About Me</h1>
          <h5>{paraOne}</h5>
          <h5>{paraTwo}</h5>
          <h5>{paraThree}</h5>
          <img
            onClick={() =>
              window.open(
                "https://open.spotify.com/user/ao0ld1szgvqw39khrd2yigafv?si=6f80de20e5164735"
              )
            }
            className="Spotify"
            src={process.env.PUBLIC_URL + spotifyIcon}
            alt="Spotify logo"
          ></img>
        </div>
        <img
          className="StudyImg"
          src={process.env.PUBLIC_URL + studyingImage}
          alt="Jonathan coding his heart out"
        ></img>
      </div>
    </section>
  );
}
