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
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80",
    product: "Headphone",
    User: "User1",
    discount: 20,
    quantity: 1,
    shippingPrice: 100,
    total: 1200,
    grandTotal: 1300,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
  },
  {
    image: "https://petapixel.com/assets/uploads/2017/03/product_feat.jpg",
    product: "Shoes",
    User: "User2",
    discount: 10,
    quantity: 3,
    shippingPrice: 500,
    total: 2000,
    grandTotal: 2500,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
  },
  {
    image:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/product-ambassadors/middlebanner/reno8-pro-product-ambassadors-middlebanner-1600x1068-pc.jpg.thumb.webp",
    product: "Oppo Mobile",
    User: "User3",
    discount: 20,
    quantity: 1,
    shippingPrice: 100,
    total: 1200,
    grandTotal: 1300,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
  },

  {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80",
    product: "Headphone",
    User: "User1",
    discount: 20,
    quantity: 1,
    shippingPrice: 100,
    total: 1200,
    grandTotal: 1300,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
  },
  {
    image: "https://petapixel.com/assets/uploads/2017/03/product_feat.jpg",
    product: "Shoes",
    User: "User2",
    discount: 10,
    quantity: 3,
    shippingPrice: 500,
    total: 2000,
    grandTotal: 2500,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
  },
  {
    image:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/product-ambassadors/middlebanner/reno8-pro-product-ambassadors-middlebanner-1600x1068-pc.jpg.thumb.webp",
    product: "Oppo Mobile",
    User: "User3",
    discount: 20,
    quantity: 1,
    shippingPrice: 100,
    total: 1200,
    grandTotal: 1300,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
  },

  {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80",
    product: "Headphone",
    User: "User1",
    discount: 20,
    quantity: 1,
    shippingPrice: 100,
    total: 1200,
    grandTotal: 1300,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
  },
  {
    image: "https://petapixel.com/assets/uploads/2017/03/product_feat.jpg",
    product: "Shoes",
    User: "User2",
    discount: 10,
    quantity: 3,
    shippingPrice: 500,
    total: 2000,
    grandTotal: 2500,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
  },
  {
    image:
      "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/product-ambassadors/middlebanner/reno8-pro-product-ambassadors-middlebanner-1600x1068-pc.jpg.thumb.webp",
    product: "Oppo Mobile",
    User: "User3",
    discount: 20,
    quantity: 1,
    shippingPrice: 100,
    total: 1200,
    grandTotal: 1300,
    payment: "pending",
    orderStatus: "confirmed",
    deliverd: "no",
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

const Documents = () => {
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
            All Users
          </span>
        </div>
        {/* Add Form */}

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table style={{ paddingTop: "5%", }}>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th>Image</th>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((i, index) => (
                <tr key={index} style={{ marginTop: "1%" }}>
                  <td>
                    <img src={i.image} className="img-fluid img-thumbnail" />
                  </td>
                  <td>{i.product}</td>
                  <td> {i.User}</td>
                  <td> {i.discount}%</td>
                  <td>
                    <span style={{ display: "flex", gap: "5px" }}>
                      <AiFillEdit
                        color="blue"
                        cursor="pointer"
                        onClick={() => setModalShow(true)}
                      />
                      {/* <AiFillEye
                        cursor="pointer"
                        onClick={() => navigate("/viewProduct")}
                      /> */}
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

export default HOC(Documents);
