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
      title: "Calculator",
      description: "Design & Development",
      imgUrl: calculator,
    },
    {
      title: "Wiki",
      description: "Design & Development",
      imgUrl: Wiki,
    },
    {
      title: "Google Search Engine Imitation",
      description: "Design & Development",
      imgUrl: googleSearch,
    },
    {
      title: "Email",
      description: "Design & Development",
      imgUrl: Email,
    },
    {
      title: "Ecommerce",
      description: "Design & Development",
      imgUrl: Ecommerce,
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
            <p>Some of my mini projects.</p>

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
