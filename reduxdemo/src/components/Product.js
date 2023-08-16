import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const [products, getProducts] = useState([]);
  const dispatch=useDispatch();
console.log("add",add)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => getProducts(res));
  }, []);

  const addToCart=(product)=>{
      dispatch(add(product))

  }
  const cards = products?products.map((product) => {
    // {console.log("product",product)}
    return (      
      <div className="col-md-3">
        <Card key={product.id} style={{ width: "18rem" }}> 
          <div className="text-center">
              <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
          </div>          
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              INR {product.price}
            </Card.Text>            
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }):'';
  return (
    <>{console.log("products",products)}
      <div>Product</div>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
