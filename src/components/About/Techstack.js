import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC } from "react-icons/si";       // C icon
import { DiCss3, DiHtml5, DiReact, DiNodejs, DiMongodb, DiPython, DiJava } from "react-icons/di";
import { SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
    </Row>
  );
}

export default Techstack;
