/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Order = () => {

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{

      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/admin/orders")
      setData(data)

    }catch(e){
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
            All Orders
          </span>
        </div>
        {/* Add Form */}

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>User Name</th>
                <th>Discount</th>
                <th>Quantity</th>
                <th>Shipping Price</th>
                <th>Grand Total</th>
                <th>Payment Status</th>
                <th>Delivered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             {  data?.orders?.map((i , index) => (
              <tr key={index}>
              <td>{i.user?.name} </td>
              <td>{i.user?.phone} </td>
              <td>{i.discount} </td>
              <td>{i.shippingPrice} </td>
              <td>{i.amountToBePaid} </td>
              <td>
                
              </td>
              {i.products?.map((i , index) => ())}
             
              
              </tr>
             ))}
             
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Order);
