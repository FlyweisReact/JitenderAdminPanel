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
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "300",
  },
  {
    code: "DS54",
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "845",
  },
  {
    code: "KD32",
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "300",
  },

  {
    code: "KD32",
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "300",
  },
  {
    code: "KD32",
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "300",
  },
  {
    code: "KD32",
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "300",
  },

  {
    code: "KD32",
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "300",
  },
  {
    code: "KD32",
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "300",
  },
  {
    code: "KD32",
    ActivationDate : "01/10/2022",
    Expirydate : "10/10/2032",
    discount : "54",
    minOrder : "300",
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Delivered</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>delivery Status</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Order Status</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Order Status</option>
              <option value="1">Confirmed</option>
              <option value="2">Denied</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Payment Stsua</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Payment Status</option>
              <option value="1">Success</option>
              <option value="2">Pending</option>
            </Form.Select>
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

const Discount = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* ------------------------------------------------------------- */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* ------------------------------------------------------------- */}

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Coupons
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table style={{ paddingTop: "5%", textAlign: "center" }}>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th>Coupon Code</th>
                <th>Activation Date</th>
                <th>Expiry Date</th>
                <th>Discount</th>
                <th>Minimum Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((i, index) => (
                <tr key={index} style={{ marginTop: "1%" }}>
                  <td>
                    <span style={{ display: "flex", gap: "5px" }}>
                      <AiFillEdit
                        color="blue"
                        cursor="pointer"
                        onClick={() => setModalShow(true)}
                      />
                      <AiFillDelete color="red" cursor="pointer" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Discount);
