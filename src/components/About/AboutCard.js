import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanuja Polamuri </span>
           a final-year student pursuing <span className="purple">  B.Tech in Computer Science </span>
           at Shri Vishnu Engineering College For Women Bhimavaram,India.
            <br />
            <br/>
           I enjoy trying solving problems, learning new tools, and collaborating on projects that make a real-world impact.
            <br />
    
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Listening to music 
            </li>
            <li className="about-activity">
              <ImPointRight /> Competing in hackathons for Fun
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Myself
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
