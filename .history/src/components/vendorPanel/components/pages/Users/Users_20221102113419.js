import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";

const Users = () => {
    const [popup, setPopup] = useState(false);
    const [editA, setP] = useState(false);
  
    const addAstro = async (e) => {
      e.preventDefault();
      try {
        toast.success("Astrologer Added SuccessFully");
        setPopup(false);
      } catch (err) {
        console.log(err);
      }
    };
  
    const editAstro = async (e) => {
      e.preventDefault();
      try {
        toast.success("Astro Edited SuccessFully");
        setPopup(false);
      } catch (err) {
        console.log(err);
      }
    };
  
    const deleteAstro = async (id) => {
      toast.success('Astro Deleted SuccessFully')
    }
  
    return (
      <>
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
         Users
            </span>
            <button
              onClick={() => {
                setP(false);
                setPopup(!popup);
              }}
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
            >
              Add Users
            </button>
          </div>
          <section
            className={
              popup
                ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
                : "hidden"
            }
          >
            <div className="bg-slate-100 overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
              <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
                <span className=" font-semibold text-[rgb(241,146,46)] ">
                  {editA ? "Edit User" : "Add User"}
                </span>
                <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                  <IoMdClose
                    onClick={() => {
                      setPopup(false);
                    }}
                  />{" "}
                </div>
              </div>
  
              <form
                className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
                onSubmit={editA ? editAstro : addAstro}
              >
                <div className="inline-flex  w-full flex-col">
                  <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                  />
                </div>
                <div className="inline-flex  w-full flex-col">
                  <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                  />
                </div>
                <div className="inline-flex  w-full flex-col">
                  <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                    Phone No.
                  </label>
                  <input
                    required
                    type="tel"
                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                  />
                </div>
                <div className="inline-flex  w-full flex-col">
                  <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                    profile Image
                  </label>
                  <input
                    required
                    type="file"
                    className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                  />
                </div>
  
                <button
                  type="submit"
                  className="bg-[rgb(241,146,46)] flex items-center justify-center cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
                >
                  {editA ? "Edit" : "Add"}
                </button>
              </form>
            </div>
          </section>
  
          <div className=" wcomp overflow-y-auto">
            <table className="table-auto  w-full text-left whitespace-no-wrap">
              <thead>
                <tr className=" border-b bg-green-300 shadow-xl text-gray-900">
                  <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                    Image
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                    Phone No.
                  </th>
                  <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody style={{ color: "black" }}>
                <tr className="tracking-wider text-gray-900">
                  <td className=" py-3 w-36 md:text-base text-sm ">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
                      alt="avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                      width="100"
                    />
                  </td>
                  <td className=" py-3 w-36 md:text-base text-sm ">User</td>
                  <td className=" py-3 w-36 md:text-base text-sm ">
                    user@gmail.com
                  </td>
                  <td className=" py-3 w-36 md:text-base text-sm ">112456793</td>
                  <td className="py-3 w-36 md:text-base text-sm ">
                    <span style={{display : 'flex' , gap : '20px'}}>
                      {" "}
                      <AiFillEdit
                        cursor="pointer"
                        color="blue"
                        onClick={() => {
                          setP(true);
                          setPopup(!popup);
                        }}
                      />{" "}
                        {" "}
                      <AiFillDelete cursor="pointer" color="red" onClick={() => deleteAstro()} />{" "}
                    </span>
                 
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
}

export default HOC(Users)