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

const Order = () => {
  return (
    <div>Order</div>
  )
}

export default Order