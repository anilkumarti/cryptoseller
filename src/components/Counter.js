import React, { useState } from 'react'
import { Card,Col,Row,Container ,Button} from 'react-bootstrap'
const Counter = () => {
    const [state,setState]=useState(0);
  let inc=()=> {
    setState((prevCount)=> prevCount+1)
  }
  let decri=()=> {
    setState((prevCount)=> prevCount-1)
  }
  return (
    <div>
   
      <Container>
        <Row>
            <Col xs={4}>
                <Card className='shadow-lg'>
                    <Card.Body>
                        <p className='display-2' >  {state}</p>
                        <Button variant='success' className='m-1' onClick={inc}> Increment</Button>
                        <Button variant='warning' className='m-1' onClick={decri}> Decrement</Button>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Counter
