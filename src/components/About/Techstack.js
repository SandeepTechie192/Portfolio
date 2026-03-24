import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaChartLine,
  FaChartPie,
  FaChartBar,
  FaCalculator,
  FaFileExcel,
  FaDatabase,
  FaBriefcase,
  FaHandshake,
  FaLightbulb,
  FaPresentationBoard,
  FaUsers,
  FaBalanceScale,
} from "react-icons/fa";
import {
  SiMicrosoftexcel,
  SiTableau,
  SiGoogleanalytics,
  SiSap,
} from "react-icons/si";
import { MdAnalytics, MdTrendingUp, MdAccountBalance } from "react-icons/md";
import { BsGraphUp, BsBank } from "react-icons/bs";

function Techstack() {
  const skillStack = [
    { icon: <FaChartLine />, name: "Financial Analysis", color: "#4CAF50" },
    { icon: <SiMicrosoftexcel />, name: "MS Excel", color: "#217346" },
    { icon: <SiTableau />, name: "Tableau", color: "#E97627" },
    { icon: <MdAnalytics />, name: "Business Analytics", color: "#00BCD4" },
    { icon: <FaCalculator />, name: "Accounting", color: "#9C27B0" },
    { icon: <BsGraphUp />, name: "Market Research", color: "#FF5722" },
    { icon: <FaHandshake />, name: "Negotiation", color: "#FFC107" },
    { icon: <MdTrendingUp />, name: "Strategic Planning", color: "#2196F3" },
    { icon: <FaBriefcase />, name: "Business Development", color: "#673AB7" },
    { icon: <FaUsers />, name: "Team Leadership", color: "#E91E63" },
    { icon: <MdAccountBalance />, name: "Finance Management", color: "#00796B" },
    { icon: <SiGoogleanalytics />, name: "Google Analytics", color: "#F4B400" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skillStack.map((skill, index) => (
        <Col 
          xs={4} 
          md={2} 
          className="tech-icons tech-tooltip" 
          key={index}
          data-tooltip={skill.name}
          style={{
            "--hover-color": skill.color,
          }}
        >
          <span style={{ transition: "color 0.3s ease" }}>
            {skill.icon}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
