import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => getProducts(res));
  }, []);

  const cards = products?products.map((product) => {
    {console.log("product",product)}
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
            <Button variant="primary">Add to Cart</Button>
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
