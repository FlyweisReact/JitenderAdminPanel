/** @format */

import React from "react";
import { Spinner } from "react-bootstrap";

const Spin = () => {
  return (
    <Spinner animation="border" role="status" style={{textAlign :'center'}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Spin;
