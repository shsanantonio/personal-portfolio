import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg"; /* Source: https://undraw.co/illustrations */
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home"); // initial state to home
  const [scrolled, setScrolled] = useState(false); //checks if user has scrolled, initial would be false

  /** Personal notes for review:
   * useEffect is the hook,
   * and the function inside the hook is an effect,
   * and whatever triggered inside the function(effect) is a side effect
   */

  /**
   * useEffect will be triggered initially after everything is run if there is no dependent array,
   * and re renders everytime after you re render the application
   *
   * Placing useEffect inside the component lets us access the state variable (or any props) right from the effect
   * If there is no any array of dependencies or not even an empty array, useEffect will be triggered anytime a change in state variable has occurred
   * If there is an empty array(nothing in the array), useEffect will be triggered only once at the beginning and will never do it again
   * If there is an array of dependencies;anytime the state variables/dependencies changes, useEffect will be triggered
   *
   */

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false); // if user has scrolled back or hasn;t scrolled 50
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img
            className="logo-header"
            src={logo /* logo on topmost left of the page */}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutme"
              className={
                activeLink === "aboutme" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutme")}
            >
              About Me
            </Nav.Link>{" "}
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>{" "}
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Me
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
