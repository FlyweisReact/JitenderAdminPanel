import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

const Privacy = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/privacy",

        );
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    function MyVerticallyCenteredModal(props) {
      const [couponCode, setCouponCode] = useState("");
      const [activationDate, setAD] = useState("");
      const [expirationDate, setEd] = useState("");
      const [discount, setDiscount] = useState("");
      const [minOrder, setMinOrder] = useState("");
  
      const postData = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/coupon",
            { couponCode, activationDate, expirationDate, discount, minOrder },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(data);
          props.onHide();
          fetchData();
          toast.success("Coupon Added");
        } catch (e) {
          console.log(e);
          alert(e?.response?.data?.message)
        }
      };
  
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Coupon
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postData}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Privacy Poli</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setCouponCode(e.target.value)}
                />
              </Form.Group>
          
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    }

    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
             Privacy Policy
            </span>
         
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Privacy Policy</th>
                  <th>Actions</th>
                </tr>
              </thead>
  
              <tbody>
                  <tr >
                    <td> {data?.privacy?.privacy} </td>
                    <td>
                      <AiFillEdit color="red" cursor="pointer" onClick={() => setModalShow(true)}  />
                    </td>
                  </tr>
         
              </tbody>
            </Table>
          </div>
        </section>
      </>
    );
  };

export default HOC(Privacy)