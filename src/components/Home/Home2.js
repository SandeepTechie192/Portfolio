import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Stats from "../Stats";
import HireMe from "../HireMe";
import SectionDivider from "../SectionDivider";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">Frontend Developer</b> who
              enjoys building clean, responsive, and user-friendly web
              applications.
              <br />
              <br />I have hands-on experience working with modern frontend
              technologies like
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, HTML, CSS, and Tailwind CSS.
                </b>
              </i>
              <br />
              <br />
              My primary interest lies in creating engaging user interfaces,
              improving performance, and translating design ideas into
              high-quality code using
              <i>
                <b className="purple"> modern web technologies</b>
              </i>
              .
              <br />
              <br />
              Whenever possible, I focus on building scalable and maintainable
              frontend solutions, and I enjoy working with
              <i>
                <b className="purple"> React.js, Next.js</b>
              </i>
              &nbsp;and other modern JavaScript frameworks.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-glow" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SandeepTechie192"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Sandeep872675"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sandeep-soni-cse/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.sandeepsoni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Stats Section */}
      <Stats />

      {/* Section Divider */}
      <SectionDivider variant="gradient" />

      {/* Hire Me Section */}
      <HireMe />
    </Container>
  );
}
export default Home2;
