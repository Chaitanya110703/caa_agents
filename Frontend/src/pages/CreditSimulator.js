import React from "react";
import Navigation from "../components/Navigation";
import Simulate from "../components/Simulate";

export default function CreditSimulator() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-3">
        <h1 className="fw-bolder text-center p-3">
        <span className="text-info">Credit Score</span> Simulator 
        </h1>
        <hr />
        <Simulate />
      </div>
    </main>
  );
}
