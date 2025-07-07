import { Container, Row, Col } from 'react-bootstrap';

export const Blog = () => {
  const blogPosts = [
    {
      title: 'A Heart-Centered AI',
      url: 'https://medium.com/@sheleen.codes.thoughts/a-heart-centered-ai-761e1bcd27c7',
      date: 'July 6, 2025',
    },

    // add more posts here
  ];
  return (
    <section className="blog header-title" id="blog">
      <Container>
        <Row className="justify-content-md-center skill">
          <Col className="blog-col" xs lg="12">
            <h2>Reflections on AI and Learning</h2>

            <p>
              I share my perspective on AI from both a technical and personal
              point of view, blending emotional intelligence with technology to
              imagine a better future.
              (https://medium.com/@sheleen.codes.thoughts)
            </p>

            <Row>
              {/* {blogPosts.map((post, index) => (
                <li key={index}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 font-medium"
                  >
                    {post.title}{' '}
                    <span className="text-sm text-gray-500">({post.date})</span>
                  </a>
                </li>
              ))} */}
              {blogPosts.map((post, index) => {
                return (
                  <Col xs={6}>
                    {' '}
                    <li key={index}>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 font-medium"
                      >
                        {post.title}
                        <span className="ps-1 text-sm text-gray-500">
                          ({post.date})
                        </span>
                      </a>
                    </li>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
