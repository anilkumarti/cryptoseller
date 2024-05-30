import React  from 'react'
import { useParams,useLocation} from 'react-router-dom'



  
const ProductDetails = (props) => {
 
    const param=useParams()
    const location=useLocation()
    const product=location.state?.product;
  return (
    <div> 
      <h2>{param.productID}</h2>
       {console.log("product of details",product)}
      <h1>{product.title}</h1>
      
      <img src={product.imageSrc} alt={product.title} />
      <p>Price: {product.price}</p>
    
    </div>
  )
}

export default ProductDetails
