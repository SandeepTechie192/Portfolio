import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Testimonials from "../Testimonials";
import Contact from "../Contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">{" "}Sandeep Soni</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid floating-animation"
                style={{ 
                  maxHeight: "450px", 
                  filter: "drop-shadow(0 0 40px rgba(0, 212, 255, 0.4)) drop-shadow(0 0 80px rgba(255, 0, 128, 0.2))"
                }}
              />
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
