/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  const [index, setIndex] = useState(0); //indicates as to which word is currently displayed on the screen, from toRotate array
  const [isDeleting, setIsDeleting] = useState(false); // If the word is being typed out/ deleted out
  const [text, setText] = useState(""); // indicates which text is currently showing on the screen
  const [time, setTime] = useState(300 - Math.random() * 100); // determines how fast one letter comes after the first one is typed, 100 as max
  const toRotate = ["Web Developer", "Software Engineer"];
  const period = 2000; // indicates how much time passes between one extra letter being typed out/ transition between each words

  useEffect(() => {
    let ticker = setInterval(() => {
      /* The interval in which each text would get updated, each letter must be deleted faster that typed out */
      tick();
    }, time); /* time would be the interval when tick is getting fired off  */

    return () => {
      clearInterval(ticker);
    }; // reset interval and clear it
  }, [text]); //use effect will be run everytime text gets updated (dependent to text)

  const tick = () => {
    let i = index % toRotate.length; //index must always be less than the length of toRotate
    let fullText = toRotate[i]; //get the text from the toRotate array
    // if text is deleting, the current text will be replaced with a one letter less than the current number of letters (substring(indexStart,indexEnd))
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setTime((setTime) => setTime / 2); //makes time faster
    }

    if (!isDeleting && updatedText === fullText) {
      //if finished typing all the words and no text has been deleted yet
      setIsDeleting(true);
      setTime(period);
    } else if (isDeleting && updatedText === "") {
      // if all words (everything) has been deleted
      setIsDeleting(false);
      setIndex(index + 1); // goes to the next text in the toRotate array
      setTime(500);
    } else {
      //typing
      setTime(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            xl={8} /* Different breakpoint grids depending on the screen */
          >
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Sheleen San Antonio, `}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Web Developer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I'm a web developer with a clinical laboratory science
                background. In other words, I was a software engineer, then a
                clinical laboratory assistant II, and returned a Web Developer.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
