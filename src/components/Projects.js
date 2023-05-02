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
      description: "Design & Development",
      imgUrl: Ecommerce,
      linkUrl: "https://shen001.pythonanywhere.com/",
    },
    {
      title: "Email",
      description: "Design & Development",
      imgUrl: Email,
      linkUrl: "https://shen002.pythonanywhere.com/",
    },
    {
      title: "Wiki",
      description: "Design & Development",
      imgUrl: Wiki,
      linkUrl: "https://shen003.pythonanywhere.com/",
    },
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: calculator,
      linkUrl: "https://shen004-calculator.vercel.app/",
    },

    {
      title: "Google Search Engine Imitation",
      description: "Design & Development",
      imgUrl: googleSearch,
      linkUrl: "https://shen000-google-search.vercel.app/",
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
