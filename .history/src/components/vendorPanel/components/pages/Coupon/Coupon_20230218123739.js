/** @format */

import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Coupon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Coupon Code</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Activation Date</Form.Label>
            <Form.Control type="date"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              type="number"
              placeholder="90"
              min={1}
             
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Minimum Order</Form.Label>
            <Form.Control
              type="number"
              placeholder="500"
              min={1}
             
            />
          </Form.Group>
          <Button variant="primary" onClick={() => props.onHide()}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// ---------------------------------------------------

const Coupon = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
   
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Coupons
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Coupon
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>Coupon Code</th>
                <th>Activation Date</th>
                <th>Expiry Date</th>
                <th>Discount</th>
                <th>Minimum Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            
              <tbody>
        
                  <tr  style={{ marginTop: "1%" }}>
                    <td> KHSG23 </td>
                    <td> 12/02/2022</td>
                    <td> 12/02/2023 </td>
                    <td> 45% </td>
                    <td>₹500 </td>
                    <td>
                        <AiFillDelete
                          color="red"
                          cursor="pointer"
                        />
                    </td>
                  </tr>
        
              </tbody>
   
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Coupon);
