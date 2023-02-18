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
              <tr>
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
