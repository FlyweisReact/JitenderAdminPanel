/** @format */

import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";



const Coupon = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ data , setData ] = useState([])
  const token = localStorage.getItem("token")

  const fetchData = async () => {
    try{
      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/coupon/all" , {
        headers : {
          Authorization  : `Bearer ${token}`
        }
      })
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
   
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Coupons
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Coupon
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>Coupon Code</th>
                <th>Activation Date</th>
                <th>Expiry Date</th>
                <th>Discount</th>
                <th>Minimum Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            
              <tbody>

                {data?.coupons?.map(( i , index) => (
                  <tr key={index} >
                    <td> {i.couponCode}  </td>
                    <td> {i.activationDate.slice(0,10)}  </td>
                    <td> {i.expirationDate.slice(0,10)}  </td>
                    <td> {i.discount}  </td>
                    <td> {i.minOrder}  </td>
                    <td>
                        <AiFillDelete
                          color="red"
                          cursor="pointer"
                        />
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

export default HOC(Coupon);
