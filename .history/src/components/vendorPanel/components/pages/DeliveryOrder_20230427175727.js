
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DeliveryOrder() {
    const { id } = useParams()
    const [ data , setData ] = useState([])

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:5004/api/v1/driver/allorders/${id}`)
            setData(data)
        }catch(E) {
            console.log(E)
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
            All Delivery Order
          </span>
        </div>
        {/* Add Form */}

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>Status</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Product</th>
                <th>Payment Status</th>
                <th>Delivered</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {data?.message?.map((i , index) => (
                    <tr key={index}>
                    <td> {i.username} </td>
                        <td> {i.order?.product?.quantity} </td>
                        <td> {i.order?.product?.unitPrice} </td>
                        <td> {i.order?.product?.total} </td>
                        <td> {i.status} </td>
                        <td> {i.orderStatus} </td>
                        <td> {i.order?.paymentStatus} </td>
                    </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </section>
   </>
  )
}

export default HOC(DeliveryOrder)