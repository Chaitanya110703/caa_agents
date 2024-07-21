import React from "react";
import Navigation from "../components/Navigation";

export default function About() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <h1 className="fw-bolder text-center">
         <span className="text-info">About Us</span><hr/>
        </h1>
        <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque alias impedit deserunt magnam quis unde itaque similique deleniti eaque possimus enim suscipit quam assumenda laboriosam veniam mollitia, repudiandae amet?</p>
            </div>
        </div>
      </div>
    </main>
  );
}
