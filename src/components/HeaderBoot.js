import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const HeaderBoot = (props) => {
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
           <Button onClick={props.onShowCart}> Cart </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
};

export default HeaderBoot;
