
import { Container, Row,Col } from "react-bootstrap";
import CardBoot from "./CardBoot";


const Products = (props) => {

 
  return (
    <Container>
         <h1>{props.title}</h1>
      <Row>
     
        {props.Products &&
          props.Products.map((product) => {
            return   <Col md={6} sm={12}  key={Math.random()} >  
              <CardBoot    title={product.title} ButtonText={`add ${product.title}`} price={product.price} /> 
            
            </Col>;
          })}
      </Row>
    </Container>
  );
};

export default Products;
