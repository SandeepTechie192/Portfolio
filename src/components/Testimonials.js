import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Client Name",
      role: "CEO, Company",
      text: "Sandeep delivered exceptional work on our project. His attention to detail and creative solutions exceeded our expectations.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Another Client",
      role: "Product Manager",
      text: "Working with Sandeep was a pleasure. He understood our requirements perfectly and delivered a stunning frontend.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Team Lead",
      role: "Tech Lead, Startup",
      text: "Highly skilled developer with great communication. The UI he built was modern, responsive, and pixel-perfect.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
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
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
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
