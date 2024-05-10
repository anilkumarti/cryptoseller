
import { Container, Row,Col } from "react-bootstrap";
import CardBoot from "./CardBoot";



const Products = (props) => {

 
  return (
    <Container>
         <h1>{props.title}</h1>
      <Row>
     
        {props.products &&
          props.products.map((product) => {
            return   <Col md={6} sm={12}  key={Math.random()} >  
              <CardBoot  product={product} id={Math.random()} /> 
            
            
            </Col>;
          })}
      </Row>
    </Container>
  );
};

export default Products;
