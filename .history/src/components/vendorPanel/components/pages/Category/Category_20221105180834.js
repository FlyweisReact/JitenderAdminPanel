/** @format */

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const products = [
  {
    name: "Kids",
  },
  {
    name: "Electronics",
  },
  {
    name: "Hardware",
  },
  {
    name: "Home",
  },
  {
    name: "Wood",
  },
];
const Category = () => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/vendorDashboard",
      name: "Dashboard",
    },
    {
      icon: <BsFillPeopleFill className="text-xl mr-3 rounded-full " />,
      link: "/astro",
      name: "Astrologers",
    },
    {
      icon: <ImUsers className="text-xl mr-3 rounded-full " />,
      link: "/kundli",
      name: "Kundli",
    },
    {
      icon: <BsGlobe2 className="text-xl mr-3 rounded-full " />,
      link: "/horo",
      name: "Horoscope",
    },
    {
      icon: <TbBrandBooking className="text-xl mr-3 rounded-full " />,
      link: "/book",
      name: "Bookings",
    },
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/msg",
      name: "Notification",
    },
    {
      icon: <FaProductHunt className="text-xl mr-3 rounded-full " />,
      link: "/product",
      name: "Products",
    },
    {
      icon: <BiCategory className="text-xl mr-3" />,
      link: "/category",
      name: "Categories",
    },
  ];

  const logOut = () => {
    localStorage.removeItem("AdminToken");
    navigate("/vendorLogin");
  };

  return (
    <>
      <aside className="p-4 h-auto">
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        {/* Logo */}
        <figure className="flex  flex-col items-center">
          <span className="font-bold text-[rgb(241,146,46)]">Admin Panel</span>
        </figure>
        {/* Nav-menu */}
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm">
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
        </nav>
      </aside>
    </>
  );
}

export default Category