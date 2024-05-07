import React, {useState} from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
  

const RegisterForm = () => {
  const[newName, setNewName]=useState('')
  const[newEmail, setNewEmail]=useState('')
  const[newPassword, setNewPassword]=useState('')

 const submitHandler=(e)=> {
  e.preventDefault();
  const user= {name:newName,email:newEmail,password:newPassword}
  console.log(user)
 }

  return (
    <Container className="mt-3">
      <Row>
        <Col xs="3">
          <Card className="shadow-lg">
            <Card.Header className="p-3" style={{ background: "blue" }}>
          
              Register
            </Card.Header>
            <Card.Body style={{background: 'f7f5f0'}}>
              <Form onClick={submitHandler}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Username" onChange={(e)=> {
                    setNewName(e.target.value)
                  }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" onChange={(e)=> {
                    setNewEmail(e.target.value)
                  }} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Passowrd" onChange={(e)=> {
                    setNewPassword(e.target.value)
                  }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button variant="primary" type="submit" className="mb-3" >
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
