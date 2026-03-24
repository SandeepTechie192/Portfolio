import React from "react";
import Card from "react-bootstrap/Card";
import { FaBook, FaPlane, FaChartLine, FaCoffee } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view card-shine">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">[Your Name]</span>
            from <span className="purple">{" "}[Your City], India.</span>
            <br />
            <br />
            I'm a driven <span className="purple">Commerce & MBA Professional</span> who is passionate about 
            business strategy, financial planning, and creating value-driven solutions.
            <br />
            <br />
            Completed my MBA with specialization in [Finance/Marketing/HR], building upon my strong foundation in Commerce from [Your University].
            <br />
            <br />
            Apart from business, some other activities that I love to do!
          </p>
          <ul className="about-activity-list">
            <li className="about-activity">
              <span className="activity-icon"><FaBook /></span>
              <span>Reading Business Books</span>
            </li>
            <li className="about-activity">
              <span className="activity-icon"><FaChartLine /></span>
              <span>Stock Market Analysis</span>
            </li>
            <li className="about-activity">
              <span className="activity-icon"><FaPlane /></span>
              <span>Travelling</span>
            </li>
            <li className="about-activity">
              <span className="activity-icon"><FaCoffee /></span>
              <span>Networking over Coffee</span>
            </li>
          </ul>

          <div className="quote-highlight">
            <p>
              "Success is not just about making money, it's about making a difference!"
            </p>
          </div>
          <footer className="blockquote-footer">
            <span className="purple">[Your Name]</span>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
