import React, { useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Badge,
  NavItem,
} from "react-bootstrap";
import ContextInfo from "./context/ContextInfo";
import { Link } from "react-router-dom";

const HeaderBoot = (props) => {
  let ctx = useContext(ContextInfo);
  const itemCount = ctx.items.reduce((acc, intialvalue) => {
    return acc + intialvalue.quantity;
  }, 0);
  return (
    <Navbar
      expand="lg"
      className="bg-body-teritary"
      style={{ background: "black" }}
    >
     
        <header>
          <Nav className="header">
            <NavItem>
              <Link to="/">Home </Link>
            </NavItem>
            <NavItem>
              <Link to="/about">About us </Link>
            </NavItem>

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
        </header>
    
    </Navbar>
  );
};

export default HeaderBoot;
