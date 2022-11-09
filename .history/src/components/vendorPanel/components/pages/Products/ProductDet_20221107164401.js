/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { CradleLoader } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ProductDet = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // Fetch Single Product

  const FetchSingleProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://desh-deepak-backend.herokuapp.com/api/v1/product/${id}`
      );
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Network Error");
    }
  };

  useEffect(() => {
    FetchSingleProduct();
  }, [axios, setData, toast, setLoading]);

  //-----------------------------------------------------------------------------

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
                  <h1> {data?.product?.name} </h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5> Rating :  {data?.product?.name}  </h5>
                  <h5>Number of Reviews :  {data?.product?.name}  </h5>
                </ListGroup.Item>
                <ListGroup.Item>Price : ₹{data?.product?.name} </ListGroup.Item>
                <ListGroup.Item>Stock :  {data?.product?.name} </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Categry :  {data?.product?.name} </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  ColorAvailbale : {data?.product?.name} 
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Size Availbale : {data?.product?.name} 
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <Button style={{ width: "100%" }} variant="outline-danger">
                    {" "}
                    Delete{" "}
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "10%",
        }}
      >
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
        <Card style={{ color: "black", marginTop: "5%", width: "40%" }}>
          <Card.Title style={{ textAlign: "center", paddingTop: "2%" }}>
            {" "}
            Reviews{" "}
          </Card.Title>
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "10px",
            }}
          >
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>User Name : Shyam</ListGroup.Item>
                  <ListGroup.Item>Rating : 5</ListGroup.Item>
                  <ListGroup.Item> Comment : Nice</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>User Name : Ram</ListGroup.Item>
                  <ListGroup.Item>Rating : 2</ListGroup.Item>
                  <ListGroup.Item> Comment : Bad</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>User Name : Sahil</ListGroup.Item>
                  <ListGroup.Item>Rating : 4 </ListGroup.Item>
                  <ListGroup.Item> Comment : Good</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default HOC(ProductDet);
