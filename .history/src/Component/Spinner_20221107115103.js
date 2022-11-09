/** @format */

import React from "react";
import { Spinner } from "react-bootstrap";

const Spin = () => {
  return (
    <Spinner
      animation="border"
      role="status"
    className="Spinnner"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Spin;
