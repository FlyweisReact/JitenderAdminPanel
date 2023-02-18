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
    autoplayHoverPause: true
  };

  const items = [
    <div key={1}>
      <img src={'data:image/jpeg;base64,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'}
    </div>,
    <div key={2}>Item 2</div>,
    <div key={3}>Item 3</div>,
    <div key={4}>Item 4</div>,
    <div key={5}>Item 5</div>,
    <div key={6}>Item 6</div>,
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
                  <OwlCarousel options={options} style={{width : '200px'}}>{items}</OwlCarousel>
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
