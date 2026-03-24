import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <footer className="footer-minimal">
      <Container>
        {/* Top Section - CTA */}
        <div className="footer-cta-box">
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="footer-cta-title">Let's work together</h2>
              <p className="footer-cta-text">
                Looking for a dedicated professional to add value to your team?
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <a href="mailto:your.email@example.com" className="footer-cta-btn">
                Get in Touch <BsArrowUpRight />
              </a>
            </Col>
          </Row>
        </div>

        {/* Main Footer */}
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-info">
            <h3 className="footer-name">[Your Name]</h3>
            <p className="footer-bio">
              MBA Professional focused on business growth, strategic planning, and financial excellence.
            </p>
          </Col>
          
          <Col lg={2} md={3} sm={6} className="footer-nav">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/project">Portfolio</Link></li>
              <li><Link to="/resume">Resume</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={3} sm={6} className="footer-nav">
            <h4>Contact</h4>
            <ul>
              <li><span>your.email@example.com</span></li>
              <li><span>[Your City], India</span></li>
              <li><span>+91 XXXXX XXXXX</span></li>
            </ul>
          </Col>
          
          <Col lg={3} md={12} className="footer-social">
            <h4>Follow</h4>
            <div className="social-row">
              <a href="https://placeholder-link.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn /> LinkedIn
              </a>
              <a href="https://placeholder-link.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter /> Twitter
              </a>
              <a href="https://placeholder-link.com" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram /> Instagram
              </a>
              <a href="mailto:your.email@example.com">
                <AiFillMail /> Email
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Line */}
        <div className="footer-bottom-line">
          <p>© {year} [Your Name]. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

