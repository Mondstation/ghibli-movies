import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import totoroIcon from "../../assets/Totoro Icon.png";

function HeaderSection() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <LinkContainer exact to="/">
        <Navbar.Brand>
          <Image
            src={totoroIcon}
            alt="Totoro Icon"
            width={60}
            height={60}
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(136deg) brightness(112%) contrast(112%)",
            }}
            className="d-block mb-1"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navigation" />
      <Navbar.Collapse id="navigation">
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>
              <i className="fas fa-home" /> Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/about">
            <Nav.Link>
              <i className="fas fa-info" /> About
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/movies">
            <Nav.Link>
              <i className="fas fa-film" /> Movies
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/recommendations">
            <Nav.Link>
              <i className="fas fa-bookmark" /> Recommendations
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderSection;
