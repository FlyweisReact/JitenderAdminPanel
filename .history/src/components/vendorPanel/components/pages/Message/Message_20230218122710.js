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
        <Container style={{ marginTop: "5%", width: "800px", color: "black" }}>
          <Form onSubmit={sendMsg}>
            <Form.Label> Write Message Here </Form.Label>
            <textarea
              style={{
                border: "1px solid black",
                outline: "none",
                width: "100%",
                padding: "10px",
              }}
              onChange={(e) => setM(e.target.value)}
            />

            <Button
              style={{ width: "30%", marginTop: "2%" }}
              variant="outline-success"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HOC(MSG);
