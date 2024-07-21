import React from "react";
import Navigation from "../components/Navigation";
import AdminPanel from "../components/AdminPanel";

export default function Admin() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <h1 className="fw-bolder text-center">
          <span className="text-info">Admin Panel</span>
          <hr />
        </h1>
        <AdminPanel />
      </div>
    </main>
  );
}
