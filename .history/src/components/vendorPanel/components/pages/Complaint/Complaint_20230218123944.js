/** @format */

import React from "react";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Spin from "../../../../../Component/Spinner";

const Complaint = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Complaints
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead >
              <tr>
                <th>User</th>
                <th> Complaint </th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr style={{ marginTop: "1%" }}>
                <td> User1</td>
                <td>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  blandit enim eu massa consectetur, at convallis metus lacinia.
                  Nullam hendrerit elit eu sem feugiat, vel dictum ante semper.
                  Donec euismod, justo</p>
                </td>
                <td>
                  <AiFillDelete color="red" cursor="pointer" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Complaint);
