/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const MSG = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit ,setEdit ] = useState(false)

  const data = [
    {
      image:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      name: "Michael",
      mobile: "4512541254",
      Email: "Michal@gmail.com",
      App: "Approve",
    },
    {
      image:
        "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
      name: "Benjamin",
      mobile: "4875126354",
      Email: "Benjamin@gmail.com",
      App: "DisApprove",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
      name: "Tyler",
      mobile: "4875126354",
      Email: "Tyler@gmail.com",
      App: "Pending",
    },
  ];

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            { edit ? "Edit User" : "Add User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type='file' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
  
            <Button
              variant="outline-success"
              onClick={() => {
                props.onHide();
                toast.success(edit ? "User Edited Successfully" : "User Added Successfully")
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
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Send Notification
          </span>
        </div>
       
      </section>
    </>
  );
};

export default HOC(MSG);
