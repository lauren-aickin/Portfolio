import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import speedbacking from "../../Assets/Projects/speedbacking.jpeg";
import gitGood from "../../Assets/Projects/git-good.jpeg";
import pupparazzi from "../../Assets/Projects/pupparazzi.jpeg";
// import plantPal from "../../Assets/Projects/plant-pal.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitGood}
              isBlog={false}
              title="Git Good"
              description="A retro platformer built in 7 days with Phaser-3, Aseprite and Tiled. I self-taught all of these systems, parallax image layering and object oriented programming to complete the project."
              link="https://git-gud-eda-test.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speedbacking}
              isBlog={false}
              title="SpeedBacking"
              description="A website to make speedbacking simpler - a process using round robin style pairing to give rapid feedback among team members. Created using React, webpack, framer-motion and sqlite3."
              link="https://stylehackers-starbacking.herokuapp.com/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pupparazzi}
              isBlog={false}
              title="Pupparazzi"
              description="A learning project creating editable profiles of puppys. Focus on working with handlebars, JSON files and express servers/routing."
              link="https://puppercino.herokuapp.com/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plantPal}
              isBlog={true}
              title="Plant-Pal"
              description="A plant help website - contains an airtable database of detailed instructions on each plants care needs which is then accessed as an API. Uses a weather API to provide an image of Aucklands local sun for the day."
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
