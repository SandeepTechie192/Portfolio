import React from "react";
import { FaEnvelope, FaDownload } from "react-icons/fa";

function HireMe() {
  return (
    <div className="hire-me-section">
      <div className="hire-me-content">
        <h2 className="hire-me-title">
          Looking for Business Opportunities?
        </h2>
        <p className="hire-me-subtitle">
          I'm always open to discussing new business ventures, strategic partnerships, or opportunities to contribute to your organization's growth.
        </p>
        <div className="hire-me-buttons">
          <a 
            href="mailto:your.email@example.com" 
            className="hire-me-btn primary"
          >
            <FaEnvelope /> Let's Connect
          </a>
          <a 
            href="#"
            download="Your-Name-Resume.pdf"
            className="hire-me-btn secondary"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="hire-me-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </div>
  );
}

export default HireMe;
