import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Contact.css";
import "./Pages.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Contact() {
  const contactRef = useNav("Contact");

  return (
    <section ref={contactRef} id="contactContainer" className="Footer">
      <h5>Jonathan Lin</h5>
      <p>Candidate for Bachelors of Computer Science '26</p>
      <p>University of Waterloo</p>
      <a href="mailto: j395lin@uwaterloo.ca" rel="noreferrer">
        j395lin@uwaterloo.ca
      </a>
      <div className="Icons">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/jonathan-lin-1104/"
          target="_blank"
        >
          <IconContext.Provider value={{ size: "2.3em" }}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/Jonath4n17"
          target="_blank"
        >
          <IconContext.Provider value={{ size: "2.3em" }}>
            <FaGithubSquare />
          </IconContext.Provider>
        </a>
      </div>
    </section>
  );
}
