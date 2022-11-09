/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Spin from "../../../../../Component/Spinner";

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
 loadin
  );
};

export default HOC(ProductDet);
