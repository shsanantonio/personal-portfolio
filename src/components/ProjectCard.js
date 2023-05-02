import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={linkUrl}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <h5>Click Me!</h5>
            {`<Readme/How to Soon!>`}
          </div>
        </div>
      </a>
    </Col>
  );
};
