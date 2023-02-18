/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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
          Change Role
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Roles</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select Role</option>
              <option value="1">User</option>
              <option value="2">Admin</option>
              <option value="2">Vendor</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const Users = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
  ];

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
                <th>Approve/DisApprove</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={i.image}
                      alt="Profile"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "100%",
                      }}
                    />
                  </td>
                  <td>
                    {i.name}
                  </td>
                  <td>
                    {i.mobile}
                  </td>
                  <td>
                    {i.Email}
                  </td>
                  <td>
                    {i.App}
                  </td>
                  <td>
                    <div style={{display : 'flex' , gap : '10px'}} >
                    <AiFillDelete color="red" />
                    <AiFillEdit  color="blue" onClick={() => setModalShow(true)} cursor={"pointer"} />

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
