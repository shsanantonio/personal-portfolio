import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  linkUrl,
  readmeUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={linkUrl}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <h5>Try it!</h5>

            <span className="read-me">
              <a href={readmeUrl}>{`<Readme.md>`}</a>
            </span>
          </div>
        </div>
      </a>
    </Col>
  );
};
