import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div>
      <h1 className='mt'>Últimos lançamentos</h1>
      <Row>
        {
          products.map((p) => (
            <Col key={p._id} sm={12} md={4}>
                <Product product={p} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default HomeScreen;
