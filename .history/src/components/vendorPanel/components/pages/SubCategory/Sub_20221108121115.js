/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Spin from "../../../../../Component/Spinner";

const products = [
  {
    name: "Kids",
    parent: "Home",
  },
  {
    name: "Electronics",
    parent: "Home",
  },
  {
    name: "Hardware",
    parent: "Home",
  },
  {
    name: "Home",
    parent: "Home",
  },
  {
    name: "Wood",
    parent: "Home",
  },
];
const Sub = () => {
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const [subCat, setData] = useState([]);

  //  Admin Authorization
  const token = localStorage.getItem("token");
  const Auth = { headers: { Authorization: `Bearer ${token} ` } };

  const addFeed = async (e) => {
    e.preventDefault();
    try {
      toast.success("Sub-Category added successfully");
      setPopup(false);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  // All Sub-Categories

  const subCategory = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://desh-deepak-backend.herokuapp.com/api/v1/admin/subCategory",
        Auth
      );
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Check Your Network");
      setLoading(false);
    }
  };

  useEffect(() => {
    subCategory();
  }, [axios, setData, toast]);

  //----------------------------------------------------------

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Sub-Categories
          </span>
          <button
            onClick={() => {
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Sub-Category
          </button>
        </div>
        {/* Add Form */}
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
          style={{ maxHeight: "100%", overflow: "auto" }}
        >
          <div className="bg-slate-100 overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-[rgb(241,146,46)] ">
                Add Sub-Category
              </span>
              <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    setPopup(false);
                  }}
                />{" "}
              </div>
            </div>
            <form
              className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
              onSubmit={addFeed}
              style={{ color: "black" }}
            >
              <div className="inline-flex  w-full flex-col">
                <Form.Select aria-label="Default select example">
                  <option>Select Category</option>
                  <option value="1">Electronics</option>
                  <option value="2">hardware</option>
                  <option value="3">Men's</option>
                  <option value="3">Wood</option>
                </Form.Select>
              </div>

              <div className="inline-flex  w-full flex-col">
                <input
                  type="text"
                  placeholder="Sub-Category"
                  style={{
                    outline: "none",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <button
                type="submit"
                className="bg-[rgb(241,146,46)] flex items-center justify-center cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
              >
                Add
              </button>
            </form>
          </div>
        </section>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table style={{ paddingTop: "5%" }}>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th> Sub-Category</th>
                <th>Parent-Category </th>
                <th>Actions</th>
              </tr>
            </thead>

                    {
                      loading ? <Spin /> : <tbody>
                        {subCat?.data?.map((i , index) => (
                          <tr key={index} style={{ marginTop: "1%" }}>
                         
                          </tr>
                        ))}
                      </tbody>
                    }

            {/* <tbody>
              {products?.map((i, index) => (
                <tr key={index} style={{ marginTop: "1%" }}>
                  <td>{i.name}</td>
                  <td>{i.parent}</td>
                  <td>
                    <span style={{ display: "flex", gap: "5px" }}>
                      <AiFillEdit color="blue" cursor="pointer" />
                      <AiFillDelete color="red" cursor="pointer" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Sub);
