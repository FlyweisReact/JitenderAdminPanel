/** @format */

import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

import HOC from "../../layout/HOC";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";

const Discount = () => {
  const navigate = useNavigate();
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
            All Orders
          </span>
        </div>
        {/* Add Form */}

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table style={{ paddingTop: "5%", textAlign: "center" }}>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th>Product Image</th>
                <th>Product Name</th>
                <th>User Name</th>
                <th>Discount</th>
                <th>Quantity</th>
                <th>Shipping Price</th>
                <th> Total</th>
                <th>Grand Total</th>
                <th>Payment Status</th>
                <th>Order status</th>
                <th>Delivered</th>
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
                  <td> {i.quantity}</td>
                  <td> ₹{i.shippingPrice}</td>
                  <td> ₹{i.total}</td>
                  <td> ₹{i.grandTotal}</td>
                  <td> {i.payment}</td>
                  <td> {i.orderStatus}</td>
                  <td> {i.deliverd}</td>

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

export default HOC(Discount);
