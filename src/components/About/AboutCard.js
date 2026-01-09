import React from "react";
import Card from "react-bootstrap/Card";
import { FaGamepad, FaPen, FaPlane, FaCoffee } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view card-shine">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandeep Soni</span>
            from <span className="purple">{" "}Delhi, India.</span>
            <br />
            <br />
            I'm a passionate <span className="purple">Frontend Developer</span> who loves turning ideas into 
            interactive digital experiences.
            <br />
            <br />
            Graduated from Inderprastha engineering college with a degree in computer science, I have a strong foundation in web technologies and a keen eye for design.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="about-activity-list">
            <li className="about-activity">
              <span className="activity-icon"><FaGamepad /></span>
              <span>Playing Games</span>
            </li>
            {/* <li className="about-activity">
              <span className="activity-icon"><FaPen /></span>
              <span>Writing Tech Blogs</span>
            </li> */}
            <li className="about-activity">
              <span className="activity-icon"><FaPlane /></span>
              <span>Travelling</span>
            </li>
            <li className="about-activity">
              <span className="activity-icon"><FaCoffee /></span>
              <span>Coffee & Code Sessions</span>
            </li>
          </ul>

          <div className="quote-highlight">
            <p>
              "Strive to build things that make a difference!"
            </p>
          </div>
          <footer className="blockquote-footer">
            <span className="purple">Sandeep</span>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
