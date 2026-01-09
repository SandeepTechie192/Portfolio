import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techStack = [
    { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <DiReact />, name: "React.js", color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
    { icon: <DiNodejs />, name: "Node.js", color: "#339933" },
    { icon: <DiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <DiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: <DiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
    { icon: <DiPython />, name: "Python", color: "#3776AB" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col 
          xs={4} 
          md={2} 
          className="tech-icons tech-tooltip" 
          key={index}
          data-tooltip={tech.name}
          style={{
            "--hover-color": tech.color,
          }}
        >
          <span style={{ transition: "color 0.3s ease" }}>
            {tech.icon}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
