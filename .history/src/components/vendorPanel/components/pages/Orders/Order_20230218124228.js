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
import Spin from "../../../../../Component/Spinner";

const Order = () => {
  const [modalShow, setModalShow] = React.useState(false);


 

  //------------------------------------------------------------------

  //Update delivery Status
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Delivery Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Delivered</Form.Label>
              <Form.Select
                aria-label="Default select example"
              >
                <option>delivery Status</option>
                <option value="Delivered">Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
            <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  //-----------------------

  //Delete Order

  const deleteOrder = async (id) => {
    try {
      const data = await axios.delete(
        `https://desh-deepak-backend.herokuapp.com/api/v1/order/admin/${id}`,
        Auth
      );
      toast.success("Order Deleted SuccessFully");
      Orders();
    } catch (err) {
      console.log(err);
      toast.error("Network Issue");
    }
  };

  //--------------------------------------------

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
            All Orders
          </span>
        </div>
        {/* Add Form */}

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table style={{ paddingTop: "5%" }}>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th>Product Image</th>
                <th>Product Name</th>
                <th>User Name</th>
                <th>Discount</th>
                <th>Quantity</th>
                <th>Shipping Price</th>
                <th>Grand Total</th>
                <th>Payment Status</th>
                <th>Order status</th>
                <th>Delivered</th>
                <th>Actions</th>
              </tr>
            </thead>
            {loading ? (
              <Spin />
            ) : (
              <tbody>
                {data?.orders?.map((i, index) => (
                  <tr key={index} style={{ marginTop: "1%" }}>
                    <td style={{ display: "block" }}>
                      <ul>
                        {i.products?.map((e) =>
                          e.product?.images?.map((img, index) => (
                            <li style={{ listStyleType: "disc" }}>
                              <img
                                src={img.url}
                                key={index}
                                className="img-fluid img-thumbnail"
                              />
                            </li>
                          ))
                        )}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {i?.products?.map((e, index) => (
                          <li key={index} style={{ listStyleType: "decimal" }}>
                            {e.product?.name}{" "}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>{i.user?.name}</td>
                    <td>{i.discount}%</td>
                    <td>
                      {i.products?.map((q, index) => (
                        <p key={index}> {q.quantity} </p>
                      ))}
                    </td>
                    <td>₹{i.shippingPrice}</td>
                    <td>₹{i.grandTotal}</td>
                    <td>{i.paymentStatus}</td>
                    <td>{i.orderStatus}</td>
                    <td>{i.delivered === true ? "Yes" : "No"}</td>
                    <td>
                      <span style={{ display: "flex", gap: "5px" }}>
                        <AiFillEdit
                          color="blue"
                          cursor="pointer"
                          onClick={() => {
                            setModalShow(true);
                            setID(i._id);
                          }}
                        />
                        <AiFillDelete
                          color="red"
                          cursor="pointer"
                          onClick={() => {
                            deleteOrder(i._id);
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Order);
