import React, { useContext, useState } from "react";
import {
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";

import ModalBoot from "./ModalBoot";
import ContextInfo from "./context/ContextInfo";

const Cart = (props) => {
  const ctx=useContext(ContextInfo);
  const handleRemove=(delId)=> {
       ctx.removeItem(delId)
    
  }
const newItems=  ctx.items.reduce((acc,item) => {
 acc[item.id]= (acc[item.id]||0)+ Number(item.quantity);

 return acc

}, {})

const list=Object.keys(newItems).map((itemId) => {
   {  const  item=ctx.items.find(product=> Number(product.id===Number(itemId)))
    return  (<ListGroupItem key={item.id}>
   
    <Image
      src="https://source.unsplash.com/random/?Cryptocurrency"
      alt="crypto"
      rounded
      fluid
      style={{ maxHeight: "3rem" }}
      className="pb-1"
    />
    {item.title} {item.price}
    <Button onClick={()=> {
      handleRemove(item.id)
    }}>-</Button>
  </ListGroupItem>)
   }
});
  
  


  return (
    <ModalBoot hideCart={props.hideCart}>
      <Container fluid>
        <ListGroup>
          <h4 className="mb-3"> Shopping Cart</h4>
           { list}
        

        </ListGroup>
        <Button onClick={props.hideCart}> Close </Button>
      </Container>
    </ModalBoot>
  );
};

export default Cart;
