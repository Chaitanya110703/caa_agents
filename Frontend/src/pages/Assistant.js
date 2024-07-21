import React from "react";
import Navigation from "../components/Navigation";
import Chatbot from "../components/Chatbot";

export default function Assistant() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-4">
        <h1 className="fw-bolder text-center p-1">
          Ask Our <span className="text-info">Ai Assistant</span>
        </h1>
        <div className="d-flex justify-content-center">
          <Chatbot />
        </div>
      </div>
    </main>
  );
}
