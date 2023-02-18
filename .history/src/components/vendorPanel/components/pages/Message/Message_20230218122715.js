/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const MSG = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Send Notification
          </span>
        </div>
       
      </section>
    </>
  );
};

export default HOC(MSG);
