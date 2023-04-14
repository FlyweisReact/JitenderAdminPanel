/** @format */

import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Complaint = () => {

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/help")
      setData(data)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Complaints
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead >
              <tr>
                <th>User</th>
                <th> Complaint </th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
            {data?.message?.map((i , index) => (
              <tr key={index}>
                <td> {i.name} </td>
                <td> {i.email} </td>
                <td> {i.mobile} </td>
                <td style={{maxWidth : '300px'}}>
                  <p style={{width : '100%'}}>{</p>
                </td>
                <td>
                  <AiFillDelete color="red" cursor="pointer" />
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

export default HOC(Complaint);
