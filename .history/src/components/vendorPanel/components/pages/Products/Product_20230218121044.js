/** @format */
import React , {useRef} from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

const Product = () => {

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
      const items = carousel.querySelectorAll('.owl-item');
      const containerWidth = carousel.clientWidth;

      items.forEach((item) => {
        item.style.width = `${containerWidth}px`;
      });
    }
  };

  const items = [
    <div key={1}>
      <img
        src={
          "https://5.imimg.com/data5/MT/MB/EO/SELLER-14290347/men-555-black-fashion-lace-up-shoes-500x500.jpg"
        }
        alt=""
      />
    </div>,
    <div key={2} >
      {" "}
      <img
        src={
          "https://media.istockphoto.com/id/187310279/photo/brown-leather-shoe.jpg?s=612x612&w=0&k=20&c=N-G1SP8dDojp3M_ykS7tQuYI8OVPWM0XA8_knBiWRtY="
        }
        alt=""
        style={{width : '100%'}}
      />
    </div>,
    <div key={3} >
      {" "}
      <img
        src={
          "https://media.istockphoto.com/id/1215308875/photo/oxford-male-brogues-shoes-with-accessories-mens-fashion-classical-brown-leather-footwear-with.jpg?b=1&s=170667a&w=0&k=20&c=RQVS9uflcGhj5DQtqbyRDiT8Z9wpy1A-qtNSn3nitDs="
        }
        alt=""
        style={{width : '100%'}}
      />
    </div>,
    <div key={4} >
      {" "}
      <img
        src={
          "https://i.pinimg.com/originals/a6/f6/06/a6f606a1a0e60bd45d20165936109c17.jpg"
        }
        alt=""
        style={{width : '100%'}}
      />
    </div>,
    <div key={5} >
      {" "}
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBK5XqTFb-vQt3nc4cagEtu_aylDfL_3BNlE19lJrP1fBL1VIAJTz0oFiZ3vaAHkmK_o&usqp=CAU"
        }
        alt=""
        style={{width : '100%'}}
      />
    </div>,
    <div key={6} >
      I{" "}
      <img
        src={
          "https://cdn.shopify.com/s/files/1/0571/5122/6063/products/kms6le027a_cognac_1_610x.jpg?v=1661471750"
        }
        alt=""
        style={{width : '100%'}}
      />
    </div>,
  ];

  const data = [
    {

    }
  ]

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
                  <OwlCarousel options={options} style={{ width: "120px" }} ref={carouselRef}>
                    {items}
                  </OwlCarousel>
                </td>
                <td>
                X-Ray Kid's Shoes
                </td>
                <td>Puma White-Puma Black-Dark Shadow-Dandelion-High Risk Red</td>
                <td>₹4,299</td>
                <td>5 ,4 ,6</td>
                <td>5</td>
                <td>Men Shoes</td>
                <td>400</td>
                <td>10</td>
                <td>red , black</td>
                <td>
                  <div style={{display : 'flex' , gap : '10px'}}>
                  <i class="fa-solid fa-pen-to-square" style={{color : 'blue'}}></i>
                  <i class="fa-solid fa-trash" color="red" ></i>
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
