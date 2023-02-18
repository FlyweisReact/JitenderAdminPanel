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
import { Button } from "react-bootstrap";

const products = [
  {
    name: "Kids",
  },
  {
    name: "Electronics",
  },
  {
    name: "Hardware",
  },
  {
    name: "Home",
  },
  {
    name: "Wood",
  },
];
const Category = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Categories
          </span>
         <Button variant
        </div>
    

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table style={{ paddingTop: "5%" }}>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
          
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Category);
