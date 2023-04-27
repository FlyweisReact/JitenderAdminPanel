/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Modal } from "react-bootstrap";

const Order = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = React.useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:5004/api/v1/admin/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postHandler = async (id) => {
    try {
      const { data } = await axios.post(
        `http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:5004/api/v1/user/paymentstatus/${id}`
      );
      console.log(data);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Orders
          </span>
        </div>
        {/* Add Form */}

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>User Phone</th>
                <th>User COD Status</th>
                <th>Discount</th>
                <th>Shipping Price</th>
                <th>Grand Total</th>
                <th>Product</th>
                <th>Payment Status</th>
                <th>Delivered</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.orders?.map((i, index) => (
                <tr key={index}>
                  <td>{i.user?.name} </td>
                  <td>{i.user?.phone} </td>
                  <td>{i.user?.cod_count} </td>
                  <td>{i.discount} </td>
                  <td>{i.shippingPrice} </td>
                  <td>{i.amountToBePaid} </td>
                  <td>{i.products?.map((a) => a.product)}</td>
                  <td>{i.paymentStatus} </td>
                  <td>{i.delivered === true ? "Yes" : "No"} </td>
                  <td>
                    <i
                      className="fa-solid fa-file-pen"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        postHandler(i.user?._id);
                      }}
                    ></i>
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

export default HOC(Order);
