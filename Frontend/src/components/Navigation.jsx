import React from "react";
import NavList from "./NavList";
import { Link } from "react-router-dom";

export default function Navigation() {
  
  return ( 
    <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-evenly">
        <Link className="navbar-brand fs-2" to="/">
          CAA Agents
        </Link>
        <div className="" id="navbarColor04">
          <ul className="navbar-nav me-auto">
            <NavList pages="Home" where="/" />
            <NavList pages="Credit Score" where="/creditscore" />
            <NavList pages="Loans" where="/loan" />
            <NavList pages="Admin" where="/admin" />
            <NavList pages="Ai Assistant" where="/Assistant" />
            <NavList pages="Simulator" where="/Simulator" /> 
            <NavList pages="Contact Us" where="/contact" />
            <NavList pages="About Us" where="/about" />
            <NavList textcolor="text-danger" pages="Logout" where="/login"/>
          </ul>
        </div>
      </div>
    </nav>
  );
}
