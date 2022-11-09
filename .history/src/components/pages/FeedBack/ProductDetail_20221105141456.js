/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Row, Col, ListGroup, Card , Button } from "react-bootstrap";
import { CradleLoader } from "react-loader-spinner";

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
                <ListGroup.Item>Categry : Electronics</ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  ColorAvailbale : Red , Green , Blue{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Size Availbale : sm , lg ,xsl ,xlg
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                <Button style={{width : '100%'}}  variant='outline-danger'> Delete </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div style={{ display: "flex" , justifyContent : 'space-evenly' }}>
        <Card style={{ color: "black", marginTop: "5%", width: "40%" }}>
          <Card.Body>
            Description : Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Body>
        </Card>
        <Card style={{color : 'black' , marginTop : '5%' , width : '40%'}}>
        <Card.Body>
        <Card>
            <Card.Body>
                
            </Card.Body>
        </Card>
        <ListGroup variant="flush">
                <ListGroup.Item>Categry : Electronics</ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  ColorAvailbale : Red , Green , Blue{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Size Availbale : sm , lg ,xsl ,xlg
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                <Button style={{width : '100%'}}  variant='outline-danger'> Delete </Button>
                </ListGroup.Item>
              </ListGroup>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default HOC(ProductDetail);
