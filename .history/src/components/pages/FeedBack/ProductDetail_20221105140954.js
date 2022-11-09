/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Row, Col, ListGroup, Card } from "react-bootstrap";

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
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1> HeadPhone </h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5> Rating : 1 </h5>
                  <h5>Number of Reviews : 5</h5>
                </ListGroup.Item>
                <ListGroup.Item>Price : ₹5000</ListGroup.Item>
                <ListGroup.Item>Stock : 5000</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {" "}
                  <h1></h1>{" "}
                </ListGroup.Item>
                <ListGroup.Item>Categry : Electronics</ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  ColorAvailbale : Red , Green , Blue{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Size Availbale : sm , lg ,xsl ,xlg
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Card>
          <Card.Body>
          
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default HOC(ProductDetail);
