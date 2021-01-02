import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function FooterSection() {
  return (
    <Jumbotron fluid className="bg-dark text-white mb-0">
      <Container>
        <Row className="text-center mt-2">
          <Col xs={12} md={true}>
            <h5>&copy; Mondstation</h5>
            <p>
              The images used in this application were <strong>not</strong>{" "}
              created by me, all sources of the images can be found in the
              source code.
            </p>
          </Col>
          <Col xs={12} md={true}>
            <h5>Important Links</h5>
            <ul style={{ listStyle: "none" }} className="mr-4">
              <li>
                <a
                  className="text-white"
                  href="https://github.com/Mondstation/ghibli-movies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github" /> Source Code
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="https://ghibliapi.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-database" /> Ghibli Movies Api
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default FooterSection;
