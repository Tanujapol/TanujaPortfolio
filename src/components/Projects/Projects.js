import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import saha from "../../Assets/Projects/saha.png";

import gym from "../../Assets/Projects/gym.png";
import smartballot from "../../Assets/Projects/smartballot.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import Pharm from "../../Assets/Projects/Pharm.png";

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
              imgPath={smartballot}
              isBlog={false}
              title="SmartBallot"
              description="Smart Ballot is a seamless online voting app developed using Java in Android Studio, designed to simplify the voting process with features like voter authentication and real-time participation."
              ghLink="https://github.com/Tanujapol/smartBallot"
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pharm}
              isBlog={false}
              title="Pharmacy Visionary"
              description="Pharmacy Visionary is a Python-based application designed to help students easily check medicine availability and assist pharmacists with billing and automatic stock updates, enhancing healthcare access within the college community."
              ghLink="https://github.com/Tanujapol/PharmacyVisionary"
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Fitness Management System"
              description="Fitness Management System is a web app for gyms to efficiently manage members, trainers, plans, and attendance with secure logins and personalized dashboards."
              ghLink="https://github.com/Tanujapol/Gym-Management-System"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saha}
              isBlog={false}
              title="Saha"
              description="ZERO HUNGER – SAHA is a Python (Tkinter)-based web app developed during the GDSC Hackathon to reduce food waste by connecting donors with NGOs, helping feed underprivileged people and stray animals."
              ghLink="https://github.com/Tanujapol/saha"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio – a showcase of my work, skills, and projects"
              ghLink="https://github.com/Tanujapol/TanujaPortfolio"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
