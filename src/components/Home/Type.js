import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "MBA Graduate 🎓",
            "Business Strategist 📊",
            "Financial Analyst 💹",
            "Marketing Professional 📈",
            "Commerce Expert 💼",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 80,
        }}
      />
    </div>
  );
}

export default Type;
