/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Spin from "../../../Component/Spinner";

const products = [
  {
    name: "Kids",
  },
  {
    name: "Electronics",
  },
  {
    name: "Hardware",
  },
  {
    name: "Home",
  },
  {
    name: "Wood",
  },
];

const UserKundli = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);

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
            {edit ? "Edit Category" : "Add Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button
              variant="outline-success"
              onClick={() => {
                props.onHide();
                toast.success(
                  edit
                    ? "Category Edited SuccessFully"
                    : "Cateogry Added SuccessFully"
                );
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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Categories
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Add Category
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Category Image</th>
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((i, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={i.image}
                      alt="CategoryImage"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td> {i.name} </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <AiFillDelete
                        color="red"
                        cursor={"pointer"}
                        onClick={() =>
                          toast.success("Category deleted Sucessfully")
                        }
                      />
                      <AiFillEdit color="blue" cursor={"pointer"}    onClick={() => {
              setEdit(true);
              setModalShow(true);
            }}/>
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

export default HOC(UserKundli);
