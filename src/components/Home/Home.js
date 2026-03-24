import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import { FaUserTie } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">{" "}[Your Name]</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="profile-image-container">
              {/* Replace the placeholder below with your profile image */}
              {/* Example: <img src={yourImage} alt="profile" className="profile-image" /> */}
              <div className="profile-image-placeholder">
                <FaUserTie className="placeholder-icon" />
                <p>Add Your Photo Here</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Testimonials />
      <Contact />
    </section>
  );
}

export default Home;
