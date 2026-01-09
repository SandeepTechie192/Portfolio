import React from "react";

function SectionDivider({ variant = "wave" }) {
  if (variant === "wave") {
    return (
      <div className="section-divider wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="wave-fill"
          ></path>
        </svg>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className="section-divider gradient-line">
        <div className="gradient-bar"></div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="section-divider dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  return null;
}

export default SectionDivider;
