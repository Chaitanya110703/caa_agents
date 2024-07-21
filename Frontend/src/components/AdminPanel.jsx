import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";

export default function AdminPanel() {
  const [isValid, setIsValid] = useState(false);
  const [creditInput, setCreditInput] = useState({
    Customer_Name: "",
    Password: "",
  });
  // const [resultData, setResultData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/admin",
        creditInput
      );
      setCreditInput(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setCreditInput((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 border p-2 bg-body-secondary rounded-4">
          <form
            action=""
            method=""
            className="need-validation mt-5"
            noValidate
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-center">
              <div className="col-md-11 p-3 d-flex justify-content-evenly">
                <div className="col-md-5 border p-3">
                  <FormInput
                    label="Admin :"
                    type="text"
                    name="Customer_Name"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-5 border p-3">
                  <FormInput
                    label="Password :"
                    type="password"
                    name="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="p-3 mt-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-success rounded-5">
                <span className="">Find User Info</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {isValid ? (
        <div className="mt-5 d-flex justify-content-center">
          <div className="col-md-11 border p-3 bg-body-secondary rounded-4">
            <div className="col-md-12 d-flex justify-content-between">
              <div className="col-md-5 p-3">
                <h1 className="fw-bolder text-center">Admin Panel</h1>
              </div>
              <div className="col-md-5 p-3">
                <h3 className="fw-bolder text-end">Notify</h3>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-center">
              <div className="col-md-10">
                <h3 className="py-3 text-danger">WARNINGS :</h3>
                <div className="col-md-8">
                  <ul>
                    <li>Yeh mera scam</li>
                    <li>Yeh mera scam</li>
                    <li>Yeh mera scam</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            {/* table */}
            <div className="d-flex justify-content-center">
              <div className="col-md-10">
                <h3 className="py-3">All Customers</h3>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Sr.</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Due Date Of Current Installments</th>
                      <th scope="col">current Installment Amount</th>
                      <th scope="col">Status of Overdue</th>
                      <th scope="col">Alert</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <hr />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
