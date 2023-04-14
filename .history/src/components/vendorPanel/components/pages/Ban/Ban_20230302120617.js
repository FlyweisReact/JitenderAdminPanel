/** @format */

import React, { useState }     from "react";
import HOC from "../../layout/HOC";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal"; 
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button"; 
import axios from "axios";

const BannerImage = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL01xlB18rLLyB1gmds5ibmIE6zdiy56DuQeJ6KRLzNV57_kb3uV2esy3WumPSxJYoVEw&usqp=CAU",
    name: "  Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrTrwSBNV_bMHWJmndqqlQnoKGPqLB1rxom6qRPjLHxieN8WBPzjb9tYJMrV8DXs_cUc&usqp=CAU",
    name: "  Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03vws4ItCqSvvg4DicyNHOsNf_1e6GvfAHLhfQnExCeOe8xi32INa03pYTCVRXatBR0U&usqp=CAU",
    name: "  Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uudVGTMIEwnDSP15rIYPsG8rV0NPIRipX8X5cEofn2T0coY3-nvdKVrPFQsPh28FUoQ&usqp=CAU",
    name: " Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SDCD0OTneaEaVHPhFVrb4R3d7sBM89hExg&usqp=CAU",
    name: " Banner",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    name: " Banner",
  },
];

const Ban = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ data  , setData ] = useState([])


  const fetchData = async () => {
    try{
      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5004/api/v1/banner/all")
      setData(data)
    }catch(e) {
      console.log(e)
    }
  }


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
