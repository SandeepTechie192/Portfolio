import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
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
              I am a dedicated <b className="purple">Commerce & MBA Graduate</b> with
              a passion for business strategy, financial analysis, and market research.
              <br />
              <br />I possess strong expertise in
              <i>
                <b className="purple">
                  {" "}
                  Financial Planning, Business Development, Marketing Strategy, and Data Analytics.
                </b>
              </i>
              <br />
              <br />
              My core strengths lie in strategic thinking, market analysis,
              developing business solutions, and driving organizational growth using
              <i>
                <b className="purple"> innovative business methodologies</b>
              </i>
              .
              <br />
              <br />
              I am passionate about transforming business challenges into opportunities,
              and I excel in
              <i>
                <b className="purple"> strategic planning, financial modeling,</b>
              </i>
              &nbsp;and building sustainable business frameworks.
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
                  href="https://placeholder-link.com"
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
                  href="https://placeholder-link.com"
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
                  href="https://placeholder-link.com"
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
