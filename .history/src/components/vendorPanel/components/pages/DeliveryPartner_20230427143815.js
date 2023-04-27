import React, { useEffect, useState } from 'react'
import HOC from '../layout/HOC'
import { Table } from 'react-bootstrap'
import axios from 'axios'

const DeliveryPartner = () => {

    const [ data , setData ] = useState([])

    const fetchData = async () => {
        try{
            const { data } =await axios.get("http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:5004/api/v1/driver/alldriver")
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
            All Delivery Partner's
          </span>
        </div>


        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Name</th>
                <th> Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody> 
                {data?.message?.map((i , index) => {
                    <tr></tr>
                })}
            </tbody>
          </Table>
        </div>

        </section>
    </>
  )
}

export default HOC(DeliveryPartner)