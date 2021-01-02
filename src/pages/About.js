import React from "react";
import { Table, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PageContainer from "./Container";

function AboutPage() {
  return (
    <PageContainer title="About">
      <div className="my-3">
        <h2>Content of this website</h2>
        <p>
          This website provides a graphical user interface for the{" "}
          <strong>Ghibli Movies Api</strong> developed by{" "}
          <strong>janaipakos</strong>. You can view all movies{" "}
          <LinkContainer to="/movies">
            <a href="/">here</a>
          </LinkContainer>
          . You can also sort the movies by title, rating and release date
          ascending and descending. On the homepage you can find general
          information about Studio Ghibli. If you haven't seen any Studio Ghibli
          movies before you will also find three recommendations{" "}
          <LinkContainer to="/recommendations">
            <a href="/">here</a>
          </LinkContainer>
          . Unfortunately this website doesn't support the <i>people</i>,{" "}
          <i>locations</i>, <i>species</i> and <i>vehicles</i> features of the
          Api.
        </p>
      </div>
      <div className="my-3">
        <h2>Contact Me</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>Type</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fab fa-github" /> GitHub
              </td>
              <td>Mondstation</td>
            </tr>
            <tr>
              <td>
                <i className="fab fa-discord" /> Discord
              </td>
              <td>Mondstation#2968</td>
            </tr>
            <tr>
              <td>
                <i class="fas fa-envelope" /> E-Mail
              </td>
              <td>mondstation@gmail.com</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="my-3">
        <h2>Important Links</h2>
        <ListGroup>
          <ListGroup.Item>
            <a
              href="https://ghibliapi.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-database" /> Ghibli Movies Api
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://github.com/janaipakos/ghibliapi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" /> Source Code of the Ghibli Movies
              Api
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://github.com/Mondstation/ghibli-movies"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" /> Source Code of this website
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </PageContainer>
  );
}

export default AboutPage;
