import React from "react";
import "./second-nav.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecondNav = () => {
  return (
    <div className="second-nav">
      <img
        src="https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fGRldmVsb3BlcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="nav-header"
      />
      <div class="subject">Front End Developer</div>
      <div className="tabs">
        <Row style={{ margin: "0" }}>
          <Col style={{ border: "2px solid white" }} lg={4}>
            <Link to="/tabs/roadmap" style={{ color: "white" }}>
              Roadmap
            </Link>
          </Col>
          <Col style={{ border: "2px solid white" }} lg={4}>
            <Link to="/tabs/resources" style={{ color: "white" }}>
              Resources
            </Link>
          </Col>
          <Col style={{ border: "2px solid white" }} lg={4}>
            <Link to="/tabs/community" style={{ color: "white" }}>Community</Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SecondNav;
