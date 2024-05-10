import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Container, Nav, Navbar,Badge } from "react-bootstrap";
import ContextInfo from "./context/ContextInfo";

const HeaderBoot = (props) => {
  let ctx=useContext(ContextInfo);
  const itemCount =ctx.items.reduce((acc, intialvalue)=> {
    return acc+intialvalue.quantity
  },0);
  return (
    <Navbar
      expand="lg"
      className="bg-body-teritary"
      style={{ background: "orange" }}
    >
      <Container fluid>
        <Navbar.Brand href="Home"> Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Nav.Link> Home </Nav.Link>
            <Nav.Link href="about.js"> About</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary" onClick={props.onShowCart}>
              {" "}
              <i className="bi bi-cart3"> </i>
              {itemCount > 0 && (
                <Badge
                  style={{ position: "absolute", top: "-8px", right: "-8px" }}
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBoot;
