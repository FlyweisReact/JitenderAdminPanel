/** @format */

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { Button , Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const products = [
  {
    image: "https://emojika.com/wp-content/uploads/2021/05/men-category.jpg",
    name: "Kids",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsVC0THZJb_Mlzp4kX9NicIE4GXO8jA7fSSg2_N8VMbSv8XJWv2jGdvIBJc6VhCn3ZNg&usqp=CAU",
    name: "Electronics",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1solK4hnJxi90GSlEijWdk1Ruz-dLyg5tbJbWIk_HqdJHYowOVr-Xf3slTgBt219A8M&usqp=CAU",
    name: "Hardware",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLutbVlHfVWDfdL8bulk-gzl49leLQTG_BxnCtwCjFYmfd3TqRivV2ipxV9Hm-qU-EKbY&usqp=CAU",
    name: "Home",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ3edVMODm8u6309nVoTANRLhfxF-hHS74zgJd0yQdoo3WUqoHnSq8iJJbeszDxgN7gg&usqp=CAU",
    name: "Wood",
  },
];

const Category = () => {
  const [ edit, setEdit ] = useState(false)

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
              <Form.Control type=
           
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
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Categories
          </span>
          <Button variant="outline-success">Add Category</Button>
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
                      <AiFillEdit color="blue" cursor={"pointer"} />
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

export default HOC(Category);
