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
  name: "Headphone",
  desc: "Boot Headphone for gamings",
  price: 5000,
  ratings: 5,
  category: "Electronics",
  stock: 2000,
  numReview: 5,
  colors: ["red", "green", "blue"],
  size: ["lg", "sm", "xlg"],
},
{
  image: "https://petapixel.com/assets/uploads/2017/03/product_feat.jpg",
  name: "Shoes",
  desc: "Sports Shoes of Addidas",
  price: 2000,
  ratings: 6,
  category: "Shoes",
  stock: 500,
  numReview: 5,
  colors: ["white", "offWhite", "red"],
  size: [7, 8, 10],
},
{
  image:
    "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/product-ambassadors/middlebanner/reno8-pro-product-ambassadors-middlebanner-1600x1068-pc.jpg.thumb.webp",
  name: "Oppo Mobile",
  desc: "Mobile phone",
  price: 50000,
  ratings: 5,
  category: "Electronics",
  stock: 5000,
  numReview: 10,
  colors: ["white", "red", "blue", "black"],
  size: [],
},
{
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80",
  name: "Headphone",
  desc: "Boot Headphone for gamings",
  price: 5000,
  ratings: 5,
  category: "Electronics",
  stock: 2000,
  numReview: 5,
  colors: ["red", "green", "blue"],
  size: ["lg", "sm", "xlg"],
},
{
  image: "https://petapixel.com/assets/uploads/2017/03/product_feat.jpg",
  name: "Shoes",
  desc: "Sports Shoes of Addidas",
  price: 2000,
  ratings: 6,
  category: "Shoes",
  stock: 500,
  numReview: 5,
  colors: ["white", "offWhite", "red"],
  size: [7, 8, 10],
},
{
  image:
    "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/product-ambassadors/middlebanner/reno8-pro-product-ambassadors-middlebanner-1600x1068-pc.jpg.thumb.webp",
  name: "Oppo Mobile",
  desc: "Mobile phone",
  price: 50000,
  ratings: 5,
  category: "Electronics",
  stock: 5000,
  numReview: 10,
  colors: ["white", "red", "blue", "black"],
  size: [],
},
{
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80",
  name: "Headphone",
  desc: "Boot Headphone for gamings",
  price: 5000,
  ratings: 5,
  category: "Electronics",
  stock: 2000,
  numReview: 5,
  colors: ["red", "green", "blue"],
  size: ["lg", "sm", "xlg"],
},
{
  image: "https://petapixel.com/assets/uploads/2017/03/product_feat.jpg",
  name: "Shoes",
  desc: "Sports Shoes of Addidas",
  price: 2000,
  ratings: 6,
  category: "Shoes",
  stock: 500,
  numReview: 5,
  colors: ["white", "offWhite", "red"],
  size: [7, 8, 10],
},
{
  image:
    "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/product-ambassadors/middlebanner/reno8-pro-product-ambassadors-middlebanner-1600x1068-pc.jpg.thumb.webp",
  name: "Oppo Mobile",
  desc: "Mobile phone",
  price: 50000,
  ratings: 5,
  category: "Electronics",
  stock: 5000,
  numReview: 10,
  colors: ["white", "red", "blue", "black"],
  size: [],
},
{
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80",
  name: "Headphone",
  desc: "Boot Headphone for gamings",
  price: 5000,
  ratings: 5,
  category: "Electronics",
  stock: 2000,
  numReview: 5,
  colors: ["red", "green", "blue"],
  size: ["lg", "sm", "xlg"],
},
{
  image: "https://petapixel.com/assets/uploads/2017/03/product_feat.jpg",
  name: "Shoes",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  price: 2000,
  ratings: 6,
  category: "Shoes",
  stock: 500,
  numReview: 5,
  colors: ["white", "offWhite", "red"],
  size: [7, 8, 10],
},
{
  image:
    "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/product-ambassadors/middlebanner/reno8-pro-product-ambassadors-middlebanner-1600x1068-pc.jpg.thumb.webp",
  name: "Oppo Mobile",
  desc: "Mobile phone",
  price: 50000,
  ratings: 5,
  category: "Electronics",
  stock: 5000,
  numReview: 10,
  colors: ["white", "red", "blue", "black"],
  size: [],
},
];
const Product = () => {
  return (
    <div>Product</div>
  )
}

export default Product