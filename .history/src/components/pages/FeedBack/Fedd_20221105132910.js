/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

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
    size: "",
  },
];

const Fedd = () => {
  const [popup, setPopup] = useState(false);
  const [edit, setEdit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addCat, setAddCat] = useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  const [UserId, setU] = useState("");
  const [Feedback, setF] = useState("");

 

  const addFeed = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://astrologer-panel.herokuapp.com/admin/add-feedback",
        {
          UserId,
          Feedback,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Feedback added successfully");

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
            All Reviews
          </span>
          {/* <button
            onClick={() => {
              setEdit("");
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Feedback
          </button> */}
        </div>
        {/* Add Form */}
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
        >
          <div className="bg-slate-100 overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-[rgb(241,146,46)] ">
                Add Feedback
              </span>
              <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    setEdit("");
                    setPopup(false);
                  }}
                />{" "}
              </div>
            </div>
            <form
              className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
              onSubmit={addFeed}
            >
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Select User
                </label>
                <select
                  style={{ color: "black" }}
                  onChange={(e) => setU(e.target.value)}
                >
                  <option>Select the user</option>
                </select>
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Feedback
                </label>
                <textarea
                  onChange={(e) => setF(e.target.value)}
                  style={{ color: "black", padding: "5px" }}
                />
              </div>
              {/*  price */}

              <button
                type="submit"
                className="bg-[rgb(241,146,46)] flex items-center justify-center cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
              >
                Add
              </button>
            </form>
          </div>
        </section>

        <div style={{ maxWidth: "90%", overflow: "auto" }}>
          <Table style={{ paddingTop: "5%" , textAlign : 'center' }}>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Ratings</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Number of Reviews</th>
                <th>Color Available</th>
                <th>Size Available</th>
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
                  <td> {i.desc}</td>
                  <td> ₹{i.price}</td>
                  <td> {i.ratings}</td>
                  <td> {i.category}</td>
                  <td> {i.stock}</td>
                  <td> {i.numReview}</td>
                  <td> {i.colors.map((e) => (
                    <span> {e}  </sp>
                  ))}</td>
                  <td> {i.name}</td>
                  <td> {i.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* ----------------------------------------------------------------------------------- */}
        {/* <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Image
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Category
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Price
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Category
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Image
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Category
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Price
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Category
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Image
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Category
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Price
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Category
                </th>
              </tr>
            </thead>

            <tbody>
             
            </tbody>
          </table> */}
        {/* </div> */}
        {/* ----------------------------------------------------------------------------------- */}
      </section>
    </>
  );
};

export default HOC(Fedd);
