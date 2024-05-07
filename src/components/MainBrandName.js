import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const MainBrandName = () => {
  return ( 
    <Navbar bg="warning" variant="light"> 
    <Navbar.Brand href="#home" className="me-auto mx-auto"><h1> Raj Mahal</h1></Navbar.Brand>
    </Navbar>
  )
}

export default MainBrandName

