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
      "https://www.teahub.io/photos/full/34-345666_dragon-ball-super-wallpapers-hd-resolution-great-wallpapers.jpg",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
  },
  {
   image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9t-yrAmxe6NImSbM9qd5flHSpQBRCoGhX_BeC4LGY2J0lmPOb7ZVd8FyjW0kIaOzlSb0&usqp=CAU",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
  },
  {
 image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUDgn2OxVPHDZfskvQprmRzKtSukEo9IcyAnmmIcu44EuI1rHkvU1-PQt3j_UjsmO2go&usqp=CAU",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
  },

  { image:
      "https://www.itl.cat/pngfile/big/224-2247742_dragon-ball-super-goku-ultra-instinct.jpg",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
  },
  {
   image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Enm6nHZbIb-km9KlB4dLtGFxwrWvS4Oci_CmUyspS_wvPeNGjKAOCU5iv4aFG5o_vnA&usqp=CAU",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
  },
  {
 image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxLVccUd7kLUAcsuGsYPDvqya00Wn02Z6tw&usqp=CAU",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
  },

  { image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrj7MdgZgsN0wEKu8Tr6stxMBNbyT2XUTJLA&usqp=CAU",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
  },
  {
   image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3mcNSMF5OdvPDUnC-G5nwGeKoR8xdyNZ5QYvEvwXpNM7gneQ4W2AdP6UXMNTAUQitK8&usqp=CAU",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
  },
  {
 image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0HaoHcoO1tnsqXsm91h9ShaMKNqZHmlyf1c0m3pBH6f62L-oX_itLMYjPUwJmP5jaCg&usqp=CAU",
    name: "User1",
    phone: 1234567890,
    email: " a@gmail.com ",
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
          <Table style={{ paddingTop: "5%" }}>
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
                  <td>{i.name}</td>
                  <td> {i.phone}</td>
                  <td> {i.email}</td>
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
