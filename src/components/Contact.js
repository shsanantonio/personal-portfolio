import { Container, Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import contactMe from "../assets/img/contact-me.svg"; //https://undraw.co/
import contactHome from "../assets/img/contact-home.svg";
import contactEmail from "../assets/img/contact-email.svg";
import emailjs from "emailjs-com";

import { useRef } from "react";

export const Contact = () => {
  const form = useRef();
  const [msgResult, setMsgResult] = useState("");
  const [msgInfo, setMsgInfo] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); //stop page from refreshing when the form is submitted

    emailjs
      .sendForm(
        "service_jfxy0ct",
        "template_bc4y2c9",
        form.current,
        "iSUP_5so4VKeHGT8v"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsgResult("success");
          setMsgInfo("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          setMsgResult("danger");
          setMsgInfo("Error! Message did not send. Please try again");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col className="contact-info" size={12} md={6}>
            <img className="contact-me" src={contactMe} alt="Contact Me" />
            <Row className="contact-row">
              <img
                className="contact-icon"
                src={contactEmail}
                alt="Contact Email"
              />
              hi@sheleen.dev
            </Row>
            <Row className="contact-row">
              <img
                className="contact-icon"
                src={contactHome}
                alt="Contact Address"
              />
              Sunnyvale, California
            </Row>
          </Col>
          <Col size={12} md={6}>
            <h2>Contact Me</h2>

            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col size={12} className="px-1">
                  <input type="name" name="name" id="name" placeholder="Name" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <button type="submit">
                    <span>Send Message</span>
                  </button>
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <Alert key={msgResult} variant={msgResult}>
                    {msgInfo}
                  </Alert>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
