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
    userName : 'User1' ,
    payment : 'pending' ,
    total : 5000 ,
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

const TimeSlots = () => {
  const [popup, setPopup] = useState(false);
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
                <th>User Name</th>
                <th>Payment Status</th>
                <th> Total</th>
                <th>Discount</th>
                <th>Shipping Price</th>
                <th>Grand Total</th>
                <th>Order status</th>
                <th>Color Available</th>
                <th>Size Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {products?.map((i, index) => (
                <tr key={index} style={{ marginTop: "1%" }}>
                  <td>
                    <img src={i.image} className="img-fluid img-thumbnail" />
                  </td>
                  <td>{i.name}</td>
                  <td> ₹{i.price}</td>
                  <td> {i.ratings}</td>
                  <td> {i.category}</td>
                  <td> {i.stock}</td>
                  <td> {i.numReview}</td>
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
              ))} */}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(TimeSlots);
