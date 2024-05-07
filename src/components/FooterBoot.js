import React from "react";
import { Container, Row, Col,Nav,NavLink } from "react-bootstrap";

const FooterBoot = () => {
  return (
    <footer className="bg-primary mt-2">
      <Container >
        <Row>
          <Col>crypto King</Col>
          <Col>
            <Nav >
              <NavLink href=""> Youtube</NavLink>
             
            
            </Nav>
          </Col>
          <Col>  <NavLink href=""> Twitter</NavLink> </Col>
          <Col>   <NavLink href=""> Facebook</NavLink> </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterBoot;
