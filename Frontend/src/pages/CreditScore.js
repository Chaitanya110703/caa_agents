import React from "react";
import Navigation from "../components/Navigation";
import FormCredit from "../components/FormCredit";

export default function CreditScore() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <h1 className="fw-bolder text-center p-3">
          Get Your <span className="text-info">Credit Scores</span>
        </h1>
        <hr />
        {/* Credit Score Form */}
        <FormCredit />
      </div>
    </main>
  );
}
