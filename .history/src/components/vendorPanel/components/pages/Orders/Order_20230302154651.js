/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const Order = () => {


  const fetchData = async () => {
    try{
      
    }catch(e){
      console.log(e)
    }
  }

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
              <tr>
              <td>X-Ray Kid's Shoes</td>
                <td>
                User1
                </td>
                <td>
                  20%
                </td>
                <td>2</td>
                <td>₹500</td>
                <td>₹50000</td>
                <td>Success</td>
                <td>Yes</td>
              
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Order);
