/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../../vendorPanel/components/layout/HOC";
import { MdDashboardCustomize, MdOutlineLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VendorDashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useState(0);
  const [product, setProduct] = useState(0);
  const [ order , setOrder ] = useState(0)

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-jitender-backend.vercel.app/api/v1/products"
      );
      setProduct(data.products?.length);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchOrder = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-jitender-backend.vercel.app/api/v1/admin/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data.data?.length)
    } catch (e) {
      console.log(e);
    }
  }

  const fetchCount = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-jitender-backend.vercel.app/api/v1/admin/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(data?.total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCount();
    fetchProduct();
    fetchOrder()
  }, []);

  const card = [
    {
      progress: "bg-blue-400",
      title: "All Users",
      number: user,
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link: "/users",
    },
    {
      progress: "bg-green-400",
      title: "All Products",
      number: product,
      icon: (
        <MdOutlineLibraryBooks className="text-2xl text-[rgb(240,72,88)]" />
      ),
      link: "/product",
    },
    {
      progress: "bg-yellow-400",
      title: "All Orders",
      number: "150",
      icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
    },
    {
      progress: "bg-yellow-400",
      title: "All Categories",
      number: "150",
      icon: <MdDashboardCustomize className="text-2xl text-[rgb(240,72,88)]" />,
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {/* Card */}
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cursor-pointer"
              key={`User${index}`}
              onClick={() => navigate(card.link)}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                    {card.number}
                  </span>
                </div>
                {/* Icons */}
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(VendorDashboard);
