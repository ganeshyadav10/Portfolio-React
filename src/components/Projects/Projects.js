import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/hms.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/port.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Hospital Management System Using Django"
              description="This project is a software, designed using Django that will
              automate hospital management. The said project will automate
              the hospital many vital daily processes,Duration:20
              days,Technologies:HTML,CSS,Javascript,Bootstrap,Django and Sql."
              ghLink="https://github.com/ganeshyadav10/Hospital-Management-System-Using-Django"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio Website"
              description="This portfolio typically serves as a showcase of my skills,
              projects and achievements. Duration:10
              days,Technologies:HTML,CSS,Bootstrap,React js."
              ghLink="https://github.com/ganeshyadav10/portfolio"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
