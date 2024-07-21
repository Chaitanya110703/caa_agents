import React from "react";
import Navigation from "../components/Navigation";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <h1 className="fw-bolder text-center">
         <span className="text-info">Contact us</span><hr/>
        </h1>
        <ContactInfo />
      </div>
    </main>
  );
}
