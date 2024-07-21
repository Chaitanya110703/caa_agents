import React from "react";
import CreditCard from "./CreditCard";

export default function LoanCard() {
  return (
    <div className="mt-5 d-flex justify-content-center" id="cards">
      <div className="col-md-11 border p-3 bg-body-secondary rounded-4">
        <div className="col-md-12 p-3">
          <h3 className="mx-5 px-4">Loan Offers</h3>
          <div className="col-md-12 d-flex justify-content-evenly mt-4 pb-3">
            <CreditCard title="Credit Score" int_rate={6} emi={6000} />
            <CreditCard title="Strategy" int_rate={8} emi={12000} />
            <CreditCard title="Loan Eligibilty" int_rate={7.6} emi={60000} />
          </div>
        </div>
      </div>
    </div>
  );
}
