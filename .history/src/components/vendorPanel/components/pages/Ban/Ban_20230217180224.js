/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Image from "../../../../../Component/Banner.jpg";

const BannerImage = [
  {
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Froad-of-naruto-anniversary-trailer-20th-anniversary-info-000.jpg?fit=max&cbr=1&q=90&w=750&h=500",
    name: "Image Of Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhiKcrSLX9a-yF9rS4qR5Iz8rdD0GuwA9jqC_ySyPs-XR7335v62e6ApzZodYwSvDiKQ&usqp=CAU",
    name: "Image Of Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eFrIZnVZaIoDkjVh8lbcZtQHVI20dpZ7VA&usqp=CAU",
    name: "Image Of Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-A0sC9efi8q1WcBOSxiL54JeverkoprDEEw&usqp=CAU",
    name: "Image Of Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SDCD0OTneaEaVHPhFVrb4R3d7sBM89hExg&usqp=CAU",
    name: "Image Of Banner",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    name: "Image Of Banner",
  },
];

const Ban = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Banner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Banner" required />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
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
            All Banner
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add-Banner
          </Button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {BannerImage.map((i) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={i.image}
                      style={{ width: "100%", height: "200px" }}
                      alt={i.name}
                    />
                    <div className="card-title" style={{ textAlign: "center" }}>
                      {i.name}
                    </div>

                    <Button
                      variant="outline-danger"
                      style={{ width: "100%" }}
                      onClick={() =>
                        toast.success("Banner deleted Successfully")
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Ban);
