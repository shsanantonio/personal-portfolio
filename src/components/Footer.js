import { Container, Row, Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.facebook.com/shenely987"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} /* Facebook icon */ alt="" />
              </a>
              <a
                href="https://www.instagram.com/ascenshen333/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} /* Instagram icon */ alt="" />
              </a>
              <a
                href="https://github.com/shsanantonio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon4} /* Github icon */ alt="" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
