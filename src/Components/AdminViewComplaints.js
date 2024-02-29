import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";
import Sidebar from "./Sidebar/Sidebar";

function AdminViewComplaints() {
  const [value, setvalues] = useState([]);

  useEffect(() => {
    axiosInstance
      .post("/viewAllComplaint")
      .then((res) => {
        console.log(res);
        setvalues(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      
      <div class="container">
      {value.length <= 0 ? (
          <h1 style={{ padding: "50px", textAlign: "center" }}>
            No Complaints Found
          </h1>) :(
        <div class="mrgin">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Customer E-mail</th>
                  <th scope="col">Customer Contact</th>
                  <th scope="col">Complaint</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Company E-mail</th>
                  <th scope="col">Company Contact</th>
                </tr>
              </thead>
              <tbody>
                {
                  value.map((a) => {
                    return (
                      <tr>
                        <td>{a.pid.name}</td>
                        <td>{a.pid.email}</td>
                        <td>{a.pid.contact}</td>
                        <td>{a.complaint}</td>
                        <td>{a.mid.name}</td>
                        <td>{a.mid.email}</td>
                        <td>{a.mid.contact}</td>
                      </tr>
                    );
                  })
                 }
              </tbody>
            </table>
          </div>
        </div>
          )}
      </div>
    </div>
  );
}

export default AdminViewComplaints;
