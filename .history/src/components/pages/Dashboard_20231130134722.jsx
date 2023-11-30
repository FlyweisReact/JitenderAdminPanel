/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import { MdDashboardCustomize, MdOutlineLibraryBooks } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(0);
  const [category, setCategory] = useState(0);

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

  const fetchCat = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-jitender-backend.vercel.app/api/v1/catogory/getAllCategory"
      );
      setCategory(data.categories?.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCat()
  }, []);

  const card = [
    {
      progress: "bg-green-400",
      title: "All Products",
      number: "100",
      icon: (
        <MdOutlineLibraryBooks className="text-2xl text-[rgb(241,147,48)]" />
      ),
    },
    {
      progress: "bg-yellow-400",
      title: "All Categories",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {/* Card */}
        {card.map((card) => {
          return (
            <div className="px-5 py-8 bg-slate-200 hover:bg-green-200 space-y-2 shadow-xl flex flex-col  rounded-md">
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

export default HOC(Dashboard);
