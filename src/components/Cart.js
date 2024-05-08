import React from "react";
import { Container, Image, ListGroup, ListGroupItem ,Button} from "react-bootstrap";

import ModalBoot from "./ModalBoot";

const Cart = (props) => {
  const musicProductsView = [
    {
      "title": "Colors",
      "price": 100,
      "imageUrl": "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "quantity": 2
    },
    {
      "title": "Black and white Colors",
      "price": 50,
      "imageUrl": "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "quantity": 3
    },
    {
      "title": "Yellow and Black Colors",
      "price": 70,
      "imageUrl": "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "quantity": 1
    }
  ]
  .map((item) => <ListGroupItem key={Math.random}>
         <Image
          src="https://source.unsplash.com/random/?Cryptocurrency"
          alt="crypto"
          rounded
          fluid
          style={{ maxHeight: "3rem" }}
          className="pb-1"
        /> {item.title} {item.price}  <Button>-</Button>
  </ListGroupItem>
    
  );

  return (
    <ModalBoot hideCart={props.hideCart}>
      <Container fluid>
        <ListGroup> 
          <h4 className="mb-3"> Shopping Cart</h4> 
          
          {musicProductsView}</ListGroup>
          <Button onClick={props.hideCart}> Close </Button>
      </Container>
    </ModalBoot>
  );
};

export default Cart;
