/** @format */

import React, { useEffect, useState } from "react";
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
  const [edit, setEdit] = useState(false);
  const [ data , setData ] = useState([])
  const token = localStorage.getItem('token')

  const fetchData = async () => {
    try{
      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/vender/all" , {
      headers : {
        Authorization : `Bearer ${token}`
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

  function MyVerticallyCenteredModal(props) {

    const  [ name , setName  ] = useState("")
    const  [ email , setEmail  ] = useState("")
    const  [ phone , setPhone ] = useState("")
    const  [ password , setPassword  ] = useState("")

    const addVendor = async (e) => {
      e.preventDefault()
      try{
        const { data } = await axios.post("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/vender/register" , { name , email , phone , password })
        console.log(data)
        props.onHide()
        toast.success('Vendor Added')
        fetchData()
      }catch(e){
        console.log(e)
      }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "  Approve or DisApprove" : "Add Vendor"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addVendor}>
          
      
             <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"   />
            </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="file"  />
            </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="file"  />
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Approve or DisApprove</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Role</option>
                  <option value="1">Approve</option>
                  <option value="2">DisApprove</option>
                  <option value="2">Pending</option>
                </Form.Select>
              </Form.Group>
      

            <Button
              variant="outline-success"
              onClick={() => {
                props.onHide();
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      {/* ------------------------------------------------------------- */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* ------------------------------------------------------------- */}

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Vendors
          </span>
          <Button variant="outline-success" onClick={() => {
            setEdit(false)
            setModalShow(true)
          }} >Add Vendor</Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Approve/DisApprove</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            
            {data?.data?.map((i, index) => (
                <tr key={index}>
                  <td>{i.name}</td>
                  <td>{i.phone}</td>
                  <td>{i.email}</td>
                  <td>{i.App}</td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <AiFillDelete
                        color="red"
                        cursor={"pointer"}
                        onClick={() =>
                          toast.success("Vendor Deleted Successfully")
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
