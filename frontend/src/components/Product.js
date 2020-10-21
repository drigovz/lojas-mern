import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <>
      <Card className="rounded my-3 p-3">
        <Card.Img src={product.image} variant="top"></Card.Img>
        <div className="card-img-overlay d-flex justify-content-end">
          <a href="#" className="card-link text-danger like">
            <i className="fas fa-heart"></i>
          </a>
        </div>
        <div class="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.description}</p>
          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success">
              <h5 className="mt-4">R$ {product.price}</h5>
            </div>
            <a href="#" className="btn btn-danger mt-3">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Product;