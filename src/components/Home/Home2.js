import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me  <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              My name is Ilyas Aboubakr, and im actually a 2nd year student at ISTA Mohammédia in IT . I am a passionate and motivated second-year student specializing in Digital Development. My academic journey has provided me with a strong foundation in modern web technologies, including HTML, CSS, JavaScript, and React. I am deeply curious about the intersection of design and functionality, and I enjoy building responsive, user-friendly web applications .
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js , PHP , Laravel {" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications{" "}
                </b>
              </i>
              and in the next few years, I plan to specialize in  <b className="purple">Game Development</b> and <b className="purple">Anti-cheat systems</b>.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js </b> and {" "}
              <i>
                <b className="purple">Laravel</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
