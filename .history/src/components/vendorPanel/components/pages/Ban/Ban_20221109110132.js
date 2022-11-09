/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlG4Urst44E0RNXFWEHFZsLucIj1DzOE7CA&usqp=CAU",
    name: "Image Of Banner",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy9iUuq9tuI8od0d9Ekpzmcpdy3U2uS8JZjHfGy9L7w_SRqB4iwhQI3FhMeLU1r_3h_c&usqp=CAU",
    name: "Image Of Banner",
  },
];

const Ban = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  //Cloudinary
  const [url, setUrl] = useState("");
  const [image, setI] = useState("");

  const postDetails = (e) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dbcnha741");
    fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data);
        console.log(data?.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //------------------------------------------------------------



  return (
    <>

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Banner
          </span>
          <Button variant="outline-success">Add-Banner</Button>
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
                    />
                    <div className="card-title">{i.name}</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button variant="outline-info">Edit</Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteData(i.name)}
                      >
                        Delete
                      </Button>
                    </div>
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
