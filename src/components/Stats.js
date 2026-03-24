import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaChartLine, FaHandshake, FaAward } from "react-icons/fa";

function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    {
      icon: <FaBriefcase />,
      count: 2,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <FaChartLine />,
      count: 15,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: <FaHandshake />,
      count: 20,
      suffix: "+",
      label: "Client Relationships",
    },
    {
      icon: <FaAward />,
      count: 5,
      suffix: "+",
      label: "Certifications",
    },
  ];

  return (
    <Container fluid className="stats-section">
      <Container>
        <Row className="stats-row">
          {stats.map((stat, index) => (
            <Col key={index} md={3} sm={6} className="stats-col">
              <div className="stats-card">
                <div className="stats-icon">
                  {stat.icon}
                </div>
                <h2 className="stats-count">
                  <CountUp end={stat.count} suffix={stat.suffix} />
                </h2>
                <p className="stats-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Stats;