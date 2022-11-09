/** @format */

import React from "react";
import { Spinner } from "react-bootstrap";

const Spin = () => {
  return (
    <Spinner
      animation="border"
      role="status"
    clas
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Spin;
