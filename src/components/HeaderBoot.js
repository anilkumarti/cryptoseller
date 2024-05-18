import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Button,
  Nav,
  Navbar,
  Badge,
  NavItem,
  Container,
} from "react-bootstrap";
import ContextInfo from "./context/ContextInfo";
import { Link } from "react-router-dom";

const HeaderBoot = (props) => {
  let ctx = useContext(ContextInfo);
  const itemCount = ctx.items.reduce((acc, intialvalue) => {
    return acc + intialvalue.quantity;
  }, 0);
  return (
    <header>
      <Navbar bg="dark" >
        <Container >
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <NavItem>
            <Link to="/">Home </Link>
          </NavItem>
          <NavItem>
            <Link to="/store">Store</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About us </Link>
          </NavItem>
        </Container>

        <Button variant="outline-primary" onClick={props.onShowCart}>
          {" "}
          <i className="bi bi-cart3"> </i>
          {itemCount > 0 && (
            <Badge style={{ position: "absolute", top: "-8px", right: "-8px" }}>
              {itemCount}
            </Badge>
          )}
        </Button>
      </Navbar>
    </header>
  );
};

export default HeaderBoot;
