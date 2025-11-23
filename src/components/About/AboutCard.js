import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ilyas</span>{" "}
            from <span className="purple">Mohemmadia, Morocco</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">Student</span> at{" "}
            <span className="purple">ISTA Mohemmadia</span>.
            <br />In the next year i'll be holding a diploma in{" "}
            <span className="purple">Digital Developement</span> from{" "}
            <span className="purple">ISTA</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              • Playing Games 🎮
            </li>
            <li className="about-activity">
              • Watching movies and series 🎥
            </li>
            <li className="about-activity">
              • Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “This is your life, and it's ending one minute at a time.” {" "}
          </p>
          <footer className="blockquote-footer">Ilyas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
