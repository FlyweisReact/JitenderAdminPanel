/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

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

const TimeSlots = () => {
  const navigate = useNavigate();

  const addFeed = async (e) => {
    e.preventDefault();
    try {
      toast.success("Product added successfully");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
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
                  <td> {i.discount}%</td>
                  <td> {i.quantity}</td>
                  <td> ₹{i.shippingPrice}</td>
                  <td> ₹{i.total}</td>
                  <td> ₹{i.grandTotal}</td>
                  <td>
                    {" "}
                    {i.colors.map((e) => (
                      <span> {e} , </span>
                    ))}
                  </td>

                  <td>
                    {" "}
                    {i.size.map((e) => (
                      <span> {e} , </span>
                    ))}
                  </td>

                  <td>
                    <span style={{ display: "flex", gap: "5px" }}>
                      <AiFillEdit color="blue" cursor="pointer" />
                      <AiFillEye
                        cursor="pointer"
                        onClick={() => navigate("/viewProduct")}
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

export default HOC(TimeSlots);
