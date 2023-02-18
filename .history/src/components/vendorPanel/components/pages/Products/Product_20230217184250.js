/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  AiFillEdit,
  AiFillDelete,
  AiFillEye,
  AiOutlinePlus,
} from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Spin from "../../../../../Component/Spinner";

const Product = () => {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [parentC, setParentC] = useState([]);
  const [editP, setEditP] = useState(false);
  const [id, setId] = useState("");

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [Stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCat] = useState("");
  const [coloursAvailable, setColor] = useState([]);
  const [sizesAvailable, setSize] = useState([]);

  //Admin Token
  const token = localStorage.getItem("token");

  //Fetch products

  const fetchproducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://desh-deepak-backend.herokuapp.com/api/v1/admin/products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Network issue please retry after some time ");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchproducts();
    fetchParentCategory();
  }, [axios, token, toast]);

  //--------------------------------------------------------------------------------

  //add Product

    const addProduct = async (e) => {
      e.preventDefault();

      const fd = new FormData();
      fd.append("name", name);
      fd.append("description", description);
      fd.append("Stock", Stock);
      Array.from(images).forEach((img) => {
        fd.append("images", img);
      });
      fd.append("price", price);
      fd.append("category", category);
      fd.append("coloursAvailable", coloursAvailable);
      fd.append("sizesAvailable", sizesAvailable);

      let auth = { headers: { Authorization: `Bearer ${token}` } };

      try {
        const { data } = await axios.post(
          "https://desh-deepak-backend.herokuapp.com/api/v1/admin/product/new",
          fd,
          auth
        );
        console.log(data);
        toast.success("Product added successfully");
        fetchproducts();
        setPopup(false);
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.message);
      }
    };

  //---------------------------------------------------------------------------------

  //Delete Product

  const deleteProduct = async (id) => {
    let auth = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const data = await axios.delete(
        `https://desh-deepak-backend.herokuapp.com/api/v1/admin/product/${id}`,
        auth
      );
      toast.success("Product Deleted SuccessFully");
      fetchproducts();
    } catch (err) {
      console.log(err);
      toast.error("Network Error Please try again later");
    }
  };

  // ----------------------------------------------------------------------

  // Parent Categories

  const fetchParentCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://desh-deepak-backend.herokuapp.com/api/v1/getAllCategory"
      );
      setParentC(data);
    } catch (err) {
      console.log(err);
    }
  };

  //---------------------------------------------------------------------

  // Edit product
  const editProduct = async (e) => {
    e.preventDefault();

    const fd = {
      name,
      description,
      price,
      category,
      Stock,
      coloursAvailable,
      sizesAvailable,
    };

    let auth = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const { data } = await axios.put(
        `https://desh-deepak-backend.herokuapp.com/api/v1/admin/product/${id}`,
        fd,
        auth
      );
      console.log(data);
      toast.success("Product Edit successfully");
      fetchproducts();
      setPopup(false);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  // -------------------------------------------------------------------------

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Products
          </span>
        </div>
      

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th>Product Image</th>
                <th>Product Name</th>
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

          
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Product);
