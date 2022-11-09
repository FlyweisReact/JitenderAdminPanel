/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const products = [
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "DS54",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "845",
  },
  {
    code: "DS41",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },

  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },

  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
];

// Edit Order Modal ------------------------------------------------------------

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Coupon Code</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Activation Date</Form.Label>
            <Form.Control type="date"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Discount</Form.Label>
            <Form.Control type="number" placeholder="90" min={1} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Minimum Order</Form.Label>
            <Form.Control type="number" placeholder="500" min={1} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// Edit Order Modal Ends Here ---------------------------------------------------

const Coupon = () => {
  return (/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const products = [
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "DS54",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "845",
  },
  {
    code: "DS41",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },

  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },

  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
];

// Edit Order Modal ------------------------------------------------------------

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Coupon Code</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Activation Date</Form.Label>
            <Form.Control type="date"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Discount</Form.Label>
            <Form.Control type="number" placeholder="90" min={1} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Minimum Order</Form.Label>
            <Form.Control type="number" placeholder="500" min={1} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// Edit Order Modal Ends Here ---------------------------------------------------

}

export default Coupon