import { Container, Row, Col } from 'react-bootstrap';

export const Aboutme = () => {
  return (
    <section className="about-me header-title" id="aboutme">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="about-me-col animate-on-scroll" xs lg="12">
            <h2>About Me</h2>
            <p>
              I’ve spent the last several years working with healthcare data and
              tech, mostly making sure things are accurate, organized, and not
              quietly breaking in the background.
            </p>
            <p>
              At IGeneX, I worked closely with patient and lab data and helped
              improve internal workflows. I also built a chatbot to make it
              easier to handle common questions and support requests. A big part
              of that role was working with people directly, which is something
              I’ve always valued.
            </p>
            <p>
              I also worked as a Software Engineer Intern at Checkins.AI, where
              I helped build features, test things, and improve overall
              performance. It gave me the chance to work in a fast-moving
              environment and be part of turning ideas into something real.
            </p>
            <p>
              I build projects and join hackathons, usually around AI. I like
              starting with something unclear and figuring it out step by step.
              It’s challenging, but it’s also the part I enjoy most.
            </p>
            <p>
              I use ChatGPT pretty regularly to think through ideas and stay
              organized. Over time, it’s made me more interested in helping
              other people feel less overwhelmed by technology and more
              confident using it.
            </p>
            <p>
              Right now, I’m looking for roles in data analysis, user support,
              or product education where I can use my technical background and
              still stay connected to the human side of things.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
