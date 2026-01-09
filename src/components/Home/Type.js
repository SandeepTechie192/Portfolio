import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "Frontend Developer 🎨",
            "React.js Enthusiast ⚛️",
            "UI/UX Designer 🖌️",
            "Problem Solver 🧩",
            "Open Source Contributor 🌟",
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
