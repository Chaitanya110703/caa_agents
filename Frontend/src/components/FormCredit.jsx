import React, { useState } from "react";
import CreditCard from "../components/CreditCard";
import FormInput from "./FormInput";
import axios from "axios";
import ResultDisplay from "./ResultDisplay";
import CustomerView from "./CustomerView";
import LoanCard from "./LoanCard";

export default function FormCredit() {
  const [isValid, setIsValid] = useState(false);
  const [creditInput, setCreditInput] = useState({
    Customer_Name: "",
    Password: "",
  });
  // const [inputInfo, setInputInfo] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const response = axios.post("/customer", creditInput);
  }

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
                    label="Username / Customer Name :"
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
        <>
          <CustomerView
            cName={"Atharva"}
            income={100000}
            timeOrMissed={"1"}
            installment={6}
            deptAmt={80000}
            intRate={7.5}
            dueDate={"06-07-23"}
          />
          <ResultDisplay
            statement={"Your CIBIL Score Is:"}
            information={"750"}
          />
          <LoanCard />
        </>
      ) : (
        ""
      )}
      {/* Customer View */}

      {/* CIBIL Score */}
    </>
  );
}
