import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillHeart,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <footer className="footer-wrapper">
      {/* Wave Animation */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            className="wave-path"
          ></path>
        </svg>
      </div>
      
      <Container fluid className="footer">
        <Container>
          <Row className="footer-main">
            {/* Brand Section */}
            <Col lg={4} md={6} className="footer-brand-section">
              <h2 className="footer-brand">
                <span className="gradient-text">Sandeep Soni</span>
              </h2>
              <p className="footer-tagline">
                Frontend Developer crafting beautiful digital experiences with modern web technologies.
              </p>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>Delhi, India</span>
              </div>
              <div className="footer-contact-item">
                <AiFillMail className="footer-contact-icon" />
                <span>vermasandeep1290@gmail.com</span>
              </div>
            </Col>
            
            {/* Quick Links */}
            <Col lg={2} md={6} className="footer-links-section">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
              </ul>
            </Col>
            
            {/* Services */}
            <Col lg={3} md={6} className="footer-links-section">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li><span>Web Development</span></li>
                <li><span>UI/UX Design</span></li>
                <li><span>React Development</span></li>
                <li><span>Frontend Consulting</span></li>
              </ul>
            </Col>
            
            {/* Social Links */}
            <Col lg={3} md={6} className="footer-social-section">
              <h3 className="footer-heading">Connect With Me</h3>
              <ul className="footer-social-icons">
                <li>
                  <a
                    href="https://github.com/SandeepTechie192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link github"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Sandeep872675"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link twitter"
                    aria-label="Twitter"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sandeep-soni-cse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link linkedin"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_.sandeepsoni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link instagram"
                    aria-label="Instagram"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          
          {/* Bottom Bar */}
          <Row className="footer-bottom">
            <Col md={6} className="footer-copyright">
              <p>
                © {year} <span className="purple">Sandeep Soni</span>. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="footer-made-with">
              <p>
                Made with <AiFillHeart className="heart-icon" /> and lots of <span className="purple">☕</span>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;

