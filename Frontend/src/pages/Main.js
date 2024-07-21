import React from "react";
// import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import FirstCard from "../components/FirstCard";
import SecondCard from "../components/SecondCard";

export default function Main() {
  return (
    <main>
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <FirstCard />
        <SecondCard />
      </div>
    </main>
  );
}
