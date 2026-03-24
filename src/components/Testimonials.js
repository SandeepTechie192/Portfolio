import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "[Colleague Name]",
      role: "[Position], [Company]",
      text: "[Add a testimonial about your professional skills, leadership qualities, or business acumen. This could be from a colleague, professor, or mentor.]",
      rating: 5,
      linkedin: "https://placeholder-link.com"
    },
    {
      name: "[Professor/Mentor Name]",
      role: "Professor, [MBA College]",
      text: "[Add a testimonial highlighting your academic excellence, analytical thinking, and dedication to business studies.]",
      rating: 5,
      linkedin: "https://placeholder-link.com"
    },
    {
      name: "[Manager/Supervisor Name]",
      role: "[Position], [Company]",
      text: "[Add a testimonial about your work ethic, strategic thinking, and contributions to business growth or team success.]",
      rating: 5,
      linkedin: "https://placeholder-link.com"
    }
  ];

  return (
    <Container fluid className="testimonials-section">
      <Container>
        <h2 className="testimonials-title">
          What <span className="purple">People Say</span>
        </h2>
        <Row className="testimonials-row">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index} className="testimonial-col">
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <a 
                    href={testimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="testimonial-avatar-link"
                  >
                    <FaUserCircle className="testimonial-avatar" />
                  </a>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Testimonials;
