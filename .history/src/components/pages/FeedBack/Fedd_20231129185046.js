/** @format */
import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Fedd = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  //Modal
  function MyVerticallyCenteredModal(props) {
    const [categoryP, setP] = useState([]);

    const fetchCategory = async () => {
      try {
        const { data } = await axios.get(
          "https://mr-jitender-backend.vercel.app/api/v1/catogory/getAllCategory"
        );
        setP(data);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      if (modalShow === true) {
        fetchCategory();
      }
    }, []);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [ratings, setRating] = useState("");
    const [size, setSize] = useState("");
    const [colors, setColor] = useState("");
    const [Stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [sizeContainer, setSizeContainer] = useState([]);

    const query_adder = () => {
      setSizeContainer((prev) => [...prev, size]);
      setSize("");
    };

    const query_remover = (index) => {
      setSizeContainer((prev) => prev.filter((_, i) => i !== index));
    };

    const token = localStorage.getItem("VendorToken");

    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const postData = async (e) => {
      e.preventDefault();
      const fd = new FormData();
      fd.append("name", name);
      fd.append("description", description);
      fd.append("price", price);
      fd.append("ratings", ratings);
      fd.append("colors", colors);
      fd.append("Stock", Stock);
      fd.append("category", category);
      Array.from(sizeContainer).forEach((img, index) => {
        fd.append(`size`, img);
      });
      Array.from(image).forEach((img) => {
        fd.append("image", img);
      });

      try {
        const { data } = await axios.post(
          "https://mr-jitender-backend.vercel.app/api/v1/vender/product/new",
          fd,
          auth
        );
        console.log(data);
        props.onHide();
        fetchData();
        alert("Product Added");
      } catch (e) {
        console.log(e);
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
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files)}
                multiple
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Description"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                className="mb-3"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />

              <Button variant="dark" onClick={() => query_adder()}>
                Add
              </Button>
            </Form.Group>

            {sizeContainer?.map((i, index) => (
              <ul
                className="mt-2"
                style={{
                  border: "1px solid #000",
                  paddingTop: "10px",
                  paddingBottom: "20px",
                }}
              >
                <li style={{ listStyle: "disc" }} className="mt-1">
                  {i}
                </li>

                <li className="mt-3">
                  <Button onClick={() => query_remover(index)}>
                    Remove This One
                  </Button>
                </li>
              </ul>
            ))}

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Open this select menu</option>
                {categoryP?.categories?.map((i, index) => (
                  <option value={i._id} key={index}>
                    {" "}
                    {i.name}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Colors Available</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setColor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ratings</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setRating(e.target.value)}
              />
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

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-jitender-backend.vercel.app/api/v1/products"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteData = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://mr-jitender-backend.vercel.app/api/v1/admin/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      fetchData();
      toast.success("Product Deleted");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Products
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Product
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Size Available</th>
                <th>Ratings</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Number of Reviews</th>
                <th>Color Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.products?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={i.images?.[0]?.img}
                      style={{ width: "120px" }}
                      alt=""
                    />
                  </td>
                  <td>{i.name} </td>
                  <td>{i.description}</td>
                  <td>₹{i.price}</td>
                  <td>
                    {" "}
                    <ul style={{ listStyle: "disc" }}>
                      {i.size?.map((item) => (
                        <li key={`Item${item.size}`}> {item.size} </li>
                      ))}
                    </ul>{" "}
                  </td>
                  <td>{i.ratings}</td>
                  <td>{i.category?.name} </td>
                  <td>{i.Stock} </td>
                  <td> {i.numOfReviews} </td>
                  <td> {i.colors} </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        class="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteData(i._id)}
                      ></i>
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

export default HOC(Fedd);

//viewProduct
