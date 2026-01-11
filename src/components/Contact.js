import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_szeg7fg', // Replace with your EmailJS service ID
      'template_l1e3r2a',   // Replace with your EmailJS template ID
      form.current,
      'poXHsj_hjh0pOvXEZ'     // Replace with your EmailJS public key
    )
      .then((result) => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError(true);
        console.error('Email send error:', error);
        
        // Reset error after 3 seconds
        setTimeout(() => setError(false), 3000);
      });
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <h2 className="contact-title">
          Get In <span className="purple">Touch</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind? Let's work together!
        </p>

        <Row className="contact-row">
          <Col md={5} className="contact-info-col">
            <div className="contact-info-card">
              <h3>Let's Connect</h3>
              <p>
                I'm currently available for freelance work. If you have a project
                that you want to get started or need help with something, feel
                free to reach out.
              </p>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>vermasandeep1290@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Delhi, India</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+918726759825</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={7} className="contact-form-col">
            <div className="contact-form-card">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : error ? (
                <div className="error-message">
                  <div className="error-icon">✕</div>
                  <h3>Oops! Something went wrong</h3>
                  <p>Please try again or email me directly.</p>
                </div>
              ) : (
                <Form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="contact-form-group">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="contact-input"
                        />
                        <span className="input-border"></span>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="contact-form-group">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="contact-input"
                        />
                        <span className="input-border"></span>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="contact-form-group">
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                    <span className="input-border"></span>
                  </Form.Group>

                  <Form.Group className="contact-form-group">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="contact-input contact-textarea"
                    />
                    <span className="input-border"></span>
                  </Form.Group>

                  <Button 
                    type="submit" 
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="submitting">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    ) : (
                      <>
                        Send Message <FaPaperPlane />
                      </>
                    )}
                  </Button>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
