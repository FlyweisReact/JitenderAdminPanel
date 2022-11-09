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
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "DS54",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "845",
  },
  {
    code: "DS41",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },

  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },

  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
];

const Chat = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Complaints
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table style={{ paddingTop: "5%" }}>
            <thead>
              <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                <th>User</th>
                <th> Complaint </th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((i, index) => (
                <tr key={index} style={{ marginTop: "1%" }}>
                  <td>{i.code} </td>

                  <td>
                    <span style={{ display: "flex", gap: "5px" }}>
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

export default HOC(Chat);
