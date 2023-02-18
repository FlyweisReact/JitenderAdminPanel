/** @format */

import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

const Product = () => {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  };

  const items = [
    <div key={1}>
      <img
        src={
          "https://prod-spyne.s3.amazonaws.com/photos/event-planner/null/spyne/1536769630868/logo_yhiP385215."
        }
        alt=""
      />
    </div>,
    <div key={2}>
      {" "}
      <img
        src={
          "https://prod-spyne.s3.amazonaws.com/photos/event-planner/null/spyne/1536769630868/logo_yhiP385215."
        }
        alt=""
      />
    </div>,
    <div key={3}>
      {" "}
      <img
        src={
          "https://prod-spyne.s3.amazonaws.com/photos/event-planner/null/spyne/1536769630868/logo_yhiP385215."
        }
        alt=""
      />
    </div>,
    <div key={4}>
      {" "}
      <img
        src={
          "https://prod-spyne.s3.amazonaws.com/photos/event-planner/null/spyne/1536769630868/logo_yhiP385215."
        }
        alt=""
      />
    </div>,
    <div key={5}>
      {" "}
      <img
        src={
          "https://prod-spyne.s3.amazonaws.com/photos/event-planner/null/spyne/1536769630868/logo_yhiP385215."
        }
        alt=""
      />
    </div>,
    <div key={6}>
      I{" "}
      <img
        src={
          "https://prod-spyne.s3.amazonaws.com/photos/event-planner/null/spyne/1536769630868/logo_yhiP385215."
        }
        alt=""
      />
    </div>,
  ];

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Products
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Ratings</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Number of Reviews</th>
                <th>Color Available</th>
                <th>Size Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <OwlCarousel options={options} style={{ width: "200px" }}>
                    {items}
                  </OwlCarousel>
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
