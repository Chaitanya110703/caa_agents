import React from "react";
import { useNavigate } from "react-router-dom";

export default function SecondCard() {
  const nav = useNavigate();

  return (
    <div className="d-flex justify-content-center p-5 border">
      <div className="col-md-6">
        <div className="col-md-10 m-4 mx-5 text-center">
          <h4>
            WHAT IS <br />
            <span
              className="text-info"
              style={{ "font-size": "50px", "font-weight": 800 }}
            >
              Our Objectives ?
            </span>
          </h4>
          <hr />
        </div>
        <div className="col-md-10 m-5">
          <p>
            Our credit scoring and loan prediction system uses technologies like
            AI and machine learning for monitoring and calculating credit
            scores. It can give you loan predictions and suggestions for credit
            management plans to boost your credit score. Our system provides
            features like credit score monitoring, alerts, predicting loan
            offers, and credit management plans to help you improve your credit
            score. By analyzing the relationship between credit scores and NPAs
            (Non-Performing Assets), we highlight the significance of keeping a
            strong credit history.
          </p>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <button
            className="btn btn-success"
            onClick={() => {
              nav("/creditscore");
            }}
          >
            Check Credit Score
          </button>
        </div>
      </div>
      <div className="col-md-5 rounded-circle bg-primary d-flex align-items-center justify-content-center">
        <h4 className="text-center">
          BENEFITS OF A <br />
          <span className="fw-bolder text-dark">
            GOOD CREDIT <br />
            SCORES
          </span>
        </h4>
      </div>
    </div>
  );
}
