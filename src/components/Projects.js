import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import calculator from "../assets/img/calculator.png";
import googleSearch from "../assets/img/googleSearch.png";
import Wiki from "../assets/img/wiki.png";
import Email from "../assets/img/email.png";

import Ecommerce from "../assets/img/ecommerce.png";

export const Projects = () => {
  const projects = [
    {
      title: "Ecommerce",
      description: "Javascript, Python and SQLite",
      imgUrl: Ecommerce,
      linkUrl: "https://shen001.pythonanywhere.com/",
      readmeUrl: "https://github.com/shsanantonio/commerce-app#readme",
    },
    {
      title: "Email",
      description: "Javascript, Python and Postgresql ",
      imgUrl: Email,
      linkUrl: "https://shen002.pythonanywhere.com/",
      readmeUrl: "https://github.com/shsanantonio/mail-app#readme",
    },
    {
      title: "Wiki",
      description: "HTML, Python, Markdown",
      imgUrl: Wiki,
      linkUrl: "https://shen003.pythonanywhere.com/",
      readmeUrl: "https://github.com/shsanantonio/wiki-app#readme",
    },
    {
      title: "Calculator",
      description: "HTML, CSS and Javascript",
      imgUrl: calculator,
      linkUrl: "https://shen004-calculator.vercel.app/",
      readmeUrl: "https://github.com/shsanantonio/calculator#readme",
    },

    {
      title: "Google Search Engine Imitation",
      description: "HTML and CSS",
      imgUrl: googleSearch,
      linkUrl: "https://shen000-google-search.vercel.app/",
      readmeUrl: "https://github.com/shsanantonio/search#readme",
    },

    // {
    //   title: "Social Media",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              I built both the front-end and the back-end parts of these
              projects. I used HTML, CSS and vanilla Javascript for front-end;
              and Python, Django framework, and SQLite for backend.{" "}
            </p>

            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
