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
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }):'';
  return (
    <>{console.log("products",products)}
      <div>Product</div>
      <div>{cards}</div>
    </>
  );
};

export default Product;
