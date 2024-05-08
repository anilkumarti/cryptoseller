import React from "react";
import { Card, Button, Image } from "react-bootstrap";

const CardBoot = (props) => {
  return (
    <Card  className="mb-5">
      <Card.Body>
        <h4>{props.tittle}</h4>
        <Image
          src="https://source.unsplash.com/random/?Cryptocurrency"
          alt="crypto"
          rounded
          fluid
          style={{ maxHeight: "13rem" }}
          className="pb-1"
        />
        <div>
          <Button className="btn-sm">{props.ButtonText}</Button>
          {props.price} 
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardBoot;
