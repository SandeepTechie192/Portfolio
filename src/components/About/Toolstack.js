import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftpowerpoint,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiNotion,
  SiSlack,
  SiZoom,
  SiTrello,
  SiCanva,
} from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiMicrosoftexcel />, name: "MS Excel", color: "#217346" },
    { icon: <SiMicrosoftpowerpoint />, name: "PowerPoint", color: "#D24726" },
    { icon: <SiMicrosoftword />, name: "MS Word", color: "#2B579A" },
    { icon: <SiNotion />, name: "Notion", color: "#ffffff" },
    { icon: <SiTrello />, name: "Trello", color: "#0079BF" },
    { icon: <SiCanva />, name: "Canva", color: "#00C4CC" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col 
          xs={4} 
          md={2} 
          className="tech-icons tech-tooltip" 
          key={index}
          data-tooltip={tool.name}
          style={{
            "--hover-color": tool.color,
          }}
        >
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
