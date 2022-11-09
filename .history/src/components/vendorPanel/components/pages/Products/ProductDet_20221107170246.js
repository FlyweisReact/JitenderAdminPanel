/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ProductDet = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  //Slider

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //-----------------------------------------

  // Fetch Single Product

  const FetchSingleProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://desh-deepak-backend.herokuapp.com/api/v1/product/${id}`
      );
      setData(data);
      setLoading(false);
      console.log(data)
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
          {/* <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
            className="img-large"
          /> */}

          {data?.product?.images === 0 ? }
          {/* <Carousel activeIndex={index} onSelect={handleSelect}>
            {data?.product?.images?.map((i, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={i.url} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel> */}
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1> {data?.product?.name} </h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5> Rating : {data?.product?.ratings} </h5>
                  <h5>Number of Reviews : {data?.product?.numOfReviews} </h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  Price : ₹{data?.product?.price}{" "}
                </ListGroup.Item>
                <ListGroup.Item>Stock : {data?.product?.Stock} </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Categry : {data?.product?.category}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  ColorAvailbale :{" "}
                  {data?.product?.coloursAvailable.map((i, index) => (
                    <span key={index}> {i} </span>
                  ))}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Size Availbale :{" "}
                  {data?.product?.sizesAvailable.map((i, index) => (
                    <span key={index}> {i} </span>
                  ))}
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
          <Card.Body>Description : {data?.product?.description}</Card.Body>
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
                  <ListGroup.Item>
                    User Name : {data?.product?.name}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Rating : {data?.product?.name}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    Comment : {data?.product?.name}{" "}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    User Name : {data?.product?.name}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Rating : {data?.product?.name}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    Comment : {data?.product?.name}{" "}
                  </ListGroup.Item>
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
