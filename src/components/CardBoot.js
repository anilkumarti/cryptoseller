import React, {useContext} from "react";
import { Card, Button, Image } from "react-bootstrap";
import ContextInfo from "./context/ContextInfo";
 
const CardBoot = (props) => {
  const ctx=useContext(ContextInfo);
      const addItemHandler=(e)=> {
        e.preventDefault()
         ctx.addItem({...props.product,id:props.id,quantity:1})
       
       
      }
  return (
    <Card  className="mb-5">
      <Card.Body>
        <h4>{props.product.tittle}</h4>
        <Image
          src="https://source.unsplash.com/random/?Cryptocurrency"
          alt="crypto"
          rounded
          fluid
          style={{ maxHeight: "13rem" }}
          className="pb-1"
        />
        <div>
          <Button className="btn-sm" onClick={addItemHandler}>Add+</Button>
          {props.price} 
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardBoot;
