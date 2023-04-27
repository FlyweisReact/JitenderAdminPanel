
import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";

function DeliveryOrder() {
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
                <th>User Name</th>
                <th>User Phone</th>
                <th>User COD Status</th>
                <th>Discount</th>
                <th>Shipping Price</th>
                <th>Grand Total</th>
                <th>Product</th>
                <th>Payment Status</th>
                <th>Delivered</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.orders?.map((i, index) => (
                <tr key={index}>
                  <td>{i.user?.name} </td>
                  <td>{i.user?.phone} </td>
                  <td>{i.user?.cod_count} </td>
                  <td>{i.discount} </td>
                  <td>{i.shippingPrice} </td>
                  <td>{i.amountToBePaid} </td>
                  <td>{i.products?.map((a) => a.product)}</td>
                  <td>{i.paymentStatus} </td>
                  <td>{i.delivered === true ? "Yes" : "No"} </td>
                  <td>
                  <span className="d-flex gap-2">
                  <i
                      className="fa-solid fa-file-pen"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        postHandler(i.user?._id);
                      }}
                    ></i>
                    <Button onClick={() => {
                      setOrderId(i._id)
                      setModalShow(true)
                    }}>Assign Order</Button>
                  </span>
                 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
   </>
  )
}

export default DeliveryOrder