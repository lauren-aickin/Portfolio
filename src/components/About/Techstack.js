import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHeroku,
  DiHtml5,
  DiCss3Full,
  DiBootstrap,
  DiGithubFull,
  DiSqllite,
  DiVisualstudio
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubFull />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
    </Row>
  );
}

export default Techstack;
