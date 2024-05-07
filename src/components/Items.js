import React from 'react'
import {  Col, Container ,Row,Button} from 'react-bootstrap'
import CardBoot from './CardBoot'

const Items = () => {
  return (
  <Container fluid className='pt-3 '> 
    <h1>Cryptocurrency</h1>
    <Row className='mb-3 justify-content-center'>
      <Col md={6} xs={12}  > <CardBoot tittle='Bitcoin' ButtonText='Add Bitcoin' price='$1'
      /> </Col>
      <Col md={6} xs={12} > <CardBoot tittle='Dogecoin' ButtonText='Add Dogecoin' price='$2'/></Col>
    </Row>
    <Row>
    <Col md={6} xs={12} ><CardBoot tittle='Etherium' ButtonText='Add Etherium' price='$12'/></Col>
    <Col md={6} xs={12} ><CardBoot tittle='PB coin' ButtonText='Add PB coin' price='$12'/>  </Col>
    </Row>
    <h1>Stocks</h1>
    <Row className='mb-3 justify-content-center'>
      <Col md={6} xs={12}  > <CardBoot tittle='Bitcoin' ButtonText='Add Bitcoin' price='$1'
      /> </Col>
      <Col md={6} xs={12} > <CardBoot tittle='Dogecoin' ButtonText='Add Dogecoin' price='$2'/></Col>
    </Row>
    <Row>
    <Col md={6} xs={12} ><CardBoot tittle='Etherium' ButtonText='Add Etherium' price='$12'/></Col>
    <Col md={6} xs={12} ><CardBoot tittle='PB coin' ButtonText='Add PB coin' price='$12'/>  </Col>
    </Row>
     <Button> See the Cart</Button>
  </Container>
  )
}

export default Items
