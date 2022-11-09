/** @format */

import React from "react";
import { Spinner } from "react-bootstrap";

const Spin = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{ display: "block", margin: "auto" }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Spin;
