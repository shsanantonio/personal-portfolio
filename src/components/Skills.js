import html5 from "../assets/img/html5.svg";
import css3 from "../assets/img/css3.svg";
import js from "../assets/img/js.svg";
import react from "../assets/img/react.svg";
import pythonLogo from "../assets/img/python-logo.svg";
import cLogo from "../assets/img/c-logo.svg";
import djangoLogo from "../assets/img/django-logo.svg";
import githubLogo from "../assets/img/nav-icon4.svg";
import mysqlLogo from "../assets/img/mysql-logo.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <section className="skill header-title" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>
                <span>S</span>
                <span>k</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>s</span>
              </h2>
              <p>I have experience with these technologies.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html5} alt="html5" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="css3" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="javascript" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={djangoLogo} alt="django" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={cLogo} alt="c" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={githubLogo} alt="github" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={mysqlLogo} alt="mysql" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};