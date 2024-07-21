import React from "react";

export default function CreditCard(props) {
  return (
    <div className="col-md-3 border rounded p-2">
      <div className="d-flex justify-content-evenly pt-2">
        <i className="fa-regular fa-credit-card p-1 mt-2"></i>
        <h5 className="p-1 fs-4 fw-bolder">{props.title}</h5>
      </div>
      <hr />
      <p className="mx-3 fs-6 fw-bold">Interest Rate:&nbsp;{props.int_rate}%</p>
      <p className="mx-3 fs-6 fw-bold">EMI:&nbsp;{props.emi}</p>
    </div>
  );
};