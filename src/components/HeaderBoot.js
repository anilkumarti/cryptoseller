import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const HeaderBoot = () => {
  return (
    <Navbar expand="lg" className="bg-body-teritary" style={{ background: "blue" }}>
      <Container fluid >
        <Navbar.Brand href="Home"> Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Nav.Link> Home </Nav.Link>
            <Nav.Link href='about.js'> About</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link> Cart</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
};

export default HeaderBoot;
