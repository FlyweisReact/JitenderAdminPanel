/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Row, Col, ListGroup } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
            className="img-large"
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1> HeadPhone </h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5> Rating : 1 </h5>
              <h5>Number of Reviews : 5</h5>
            </ListGroup.Item>
            <ListGroup.Item>
                
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default HOC(ProductDetail);
