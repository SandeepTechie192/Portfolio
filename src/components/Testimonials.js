import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Abhishek",
      role: "BDA, WedMeGood",
      text: "Sandeep and I have often brainstormed on technical problems; his analytical thinking and problem-solving passion make him a great collaborator.",
      rating: 5,
      linkedin: "https://www.linkedin.com/in/abhijaiswal12578/"
    },
    {
      name: "Harsh",
      role: "Backend Developer, Hyggex World",
      text: "Collaborating with Sandeep on the frontend was effortless. He integrated my APIs flawlessly and his clean code made debugging a breeze. A true team player!",
      rating: 5,
      linkedin: "https://www.linkedin.com/in/harsh-gupta-b08a81232/"
    },
    {
      name: "Ishaan",
      role: "Tech Lead, Hyggex World",
      text: "Sandeep demonstrates strong technical skills and leadership qualities. His code reviews are thorough, and he consistently delivers scalable, maintainable solutions.",
      rating: 5,
      linkedin: "https://www.linkedin.com/in/ishaangautam9595/"
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
