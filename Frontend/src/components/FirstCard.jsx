import React from "react";
import SVG from "../components/SVG";
import { Link } from "react-router-dom";

export default function FirstCard() {
  return (
    <div className="d-flex justify-content-center p-5">
      <div
        className="col-md-6 rounded-start-4"
        style={{ "background-color": "#3948B9" }}
      >
        <div className="col-md-10 m-5">
          <h4>
            WHAT IS A
            <br />
            <span style={{ "font-size": "50px", "font-weight": 800 }}>
              Credit Score ?
            </span>
          </h4>
          <hr />
        </div>
        <div className="col-md-10 m-5">
          <p>
            A credit score is a numerical representation of a person’s
            creditworthiness, ranging from 300 to 900, where a higher score
            indicates a better credit profile. Individuals can access their
            credit score to understand their credit standing.
          </p>
        </div>
        <div className="col-md-10 m-5">
          <p className="text-success fw-bold">
            Regularly checking the credit score helps in maintaining a healthy
            credit profile.
          </p>
        </div>
      </div>
      <div className="col-md-4 bg-dark rounded-end-4">
        <div className="col-md-12 h-4">
          <SVG />
          <p className="text-center" style={{ "margin-top": "-125px" }}>
            <b>
              Know Your <br />
              Credit Score
            </b>
          </p>
        </div>
        <div className="col-md-12 mt-5 p-3 d-flex justify-content-center">
          <Link to="/creditscore" className="btn btn-success">
            Check Credit Score
          </Link>
        </div>
      </div>
    </div>
  );
}
