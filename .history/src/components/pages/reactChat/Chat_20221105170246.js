/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const products = [
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "DS54",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "845",
  },
  {
    code: "DS41",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },

  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },

  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
  {
    code: "KD32",
    ActivationDate: "01/10/2022",
    Expirydate: "10/10/2032",
    discount: "54",
    minOrder: "300",
  },
];

// Edit Order Modal ------------------------------------------------------------

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Coupon Code</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Activation Date</Form.Label>
            <Form.Control type="date"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Discount</Form.Label>
            <Form.Control type="number" placeholder="90" min={1} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Minimum Order</Form.Label>
            <Form.Control type="number" placeholder="500" min={1} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// Edit Order Modal Ends Here ---------------------------------------------------

const Chat = () => {
  const [id, setId] = useState("");
  const token = localStorage.getItem("token");
  const [chatID, setChatId] = useState([]);
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://astrologer-panel.herokuapp.com/admin/search-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.messsage);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [axios, token]);

  const createChat = (id) => {
    let AdminId = localStorage.getItem("AdminId");
    try {

    } catch (err) {
      console.log(err);
    }
  };

  // console.log('Chat Id')
  // console.log(chatID)

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow>
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5
            className="font-weight-bold mb-3 text-center text-lg-start"
            style={{ color: "black" }}
          >
            Members
          </h5>

          <MDBCard>
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                {data?.map((i) => (
                  <li
                    className="p-2 border-bottom"
                    style={{ backgroundColor: "#eee" }}
                  >
                    <a
                      href={`#${i._id}`}
                      onClick={() => {
                        // setUserId(i._id);
                        // setTimeout(() => {
                        //   createChat();
                        // }, 1000);
                        createChat(i._id);
                      }}
                      className="d-flex justify-content-between"
                    >
                      <div className="d-flex flex-row">
                        <img
                          src={
                            "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                          }
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div className="pt-1">
                          <p
                            className="fw-bold mb-0"
                            // onClick={() => {

                            //   createChat();
                            // }}
                          >
                            {" "}
                            {i.mobile_Number}{" "}
                          </p>
                          <p className="small text-muted">
                            Email : {i.email_ID}
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6" lg="7" xl="8">
          <MDBTypography listUnStyled style={{ color: "black" }}>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="40"
              />
              <MDBCard>
                <MDBCardHeader className="p-3">
                  <p className="fw-bold mb-0">UserName</p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <MDBCard className="w-100">
                <MDBCardHeader className=" p-3">
                  <p class="fw-bold mb-0">UserName</p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </MDBCardBody>
              </MDBCard>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>

            <li className="bg-white mb-3">
              <MDBTextArea label="Message" id="textAreaExample" rows={4} />
            </li>
            <Button variant="outline-info" style={{ float: "right" }}>
              Send
            </Button>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default HOC(Chat);
