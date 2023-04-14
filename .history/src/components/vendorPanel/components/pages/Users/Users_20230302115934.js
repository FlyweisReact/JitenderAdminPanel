import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";



const Users = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit ,setEdit ] = useState(false)
  const [ data , setData ] = useState([])
  const token = localStorage.getItem("token")

  const fetchData = useCallback(async() => {
    try{
      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/admin/users" , {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      setData(data)
    }catch(err){
      console.log(err)
    }
  },[token])

  useEffect(() => {
    fetchData()
  },[fetchData])




  return (
    <>
 

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users ( Total  :  {data.users.length} )
          </span>
        </div>
        {/* Add Form */}

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={index}>
               
                  <td>{i.name}</td>
                  <td>{i.phone}</td>
                  <td>{i.Email}</td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <AiFillDelete
                        color="red"
                        cursor={"pointer"}
                        onClick={() =>
                           toast.success("User Deleted Successfully")
                        }
                      />
                      <AiFillEdit
                        color="blue"
                        onClick={() => {
            setEdit(true)
            setModalShow(true)
          }}
                        cursor={"pointer"}
                      />
                    </div>
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
export default HOC(Users);
