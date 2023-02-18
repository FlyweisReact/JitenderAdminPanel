/** @format */
import React, { useRef } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const Product = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  // Owl Carousel
  const carouselRef = useRef(null);
  const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    onInitialized: () => {
      const carousel = carouselRef.current;
      const items = carousel.querySelectorAll(".owl-item");
      const containerWidth = carousel.clientWidth;

      items.forEach((item) => {
        item.style.width = `${containerWidth}px`;
      });
    },
  };
  const items = [
    <div key={1}>
      <img
        src={
          "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/c/tr:w-480,/7c7c1e1NJ_PMA3525_1.jpg?rnd=20200526195200"
        }
        alt=""
      />
    </div>,
    <div key={2}>
      {" "}
      <img
        src={
          "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/c/tr:w-480,/7c7c1e1NJ_PMA3525_2.jpg?rnd=20200526195200"
        }
        alt=""
        style={{ width: "100%" }}
      />
    </div>,
    <div key={3}>
      {" "}
      <img
        src={
          "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/c/tr:w-480,/7c7c1e1NJ_PMA3525_3.jpg?rnd=20200526195200"
        }
        alt=""
        style={{ width: "100%" }}
      />
    </div>,
  ];

  //Modal
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
            {edit ? "Edit Product" : "Add Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" />
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
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Size Available</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">Shoe</option>
                <option value="2">Shirt</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
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
              <tr>
                <td>
                  <OwlCarousel
                    options={options}
                    style={{ width: "120px" }}
                    ref={carouselRef}
                  >
                    {items}
                  </OwlCarousel>
                </td>
                <td>X-Ray Kid's Shoes</td>
                <td>
                  Puma White-Puma Black-Dark Shadow-Dandelion-High Risk Red
                </td>
                <td>₹4,299</td>
                <td>5 ,4 ,6</td>
                <td>5</td>
                <td>Men Shoes</td>
                <td>400</td>
                <td>10</td>
                <td>red , black</td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <i
                      class="fa-solid fa-pen-to-square"
                      style={{ color: "blue" }}
                    ></i>
                    <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Product);
