import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! 👋, I'm <span className="purple">Lauren Aickin </span>
            a <span className="purple">full stack developer</span> passionate about learning new systems.
            <br /> My love of tech had early roots, with my childhood being full of multiple gaming systems. Over time this has flourished, as each career experience has nurtured and highlighted that my technical skills are where I thrive. I began self studying <b className="purple">javascript</b> to provide solid foundations for a coding bootcamp and now that it’s complete I’m ready to dive headfirst into a coding career.
            <br />
            <br />
            I love to learn new languages ways of doing things - I've used both <b className="purple">functional and object oriented programming </b>styles.
            <br />
            <br />
            Whenever possible, I also apply my passion for developing games with <b className="purple">Phaser-3</b> and
                <b className="purple">
                  {" "}
                  Tiled.
                </b>
            <br />
            <br />
            Outside of coding, here are some other activities that I love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Acting
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating costumes and sewing clothing
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
