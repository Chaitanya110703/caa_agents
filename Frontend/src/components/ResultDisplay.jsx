import React from "react";

export default function ResultDisplay(props) {
  return (
    <div className="mt-5 d-flex justify-content-center" id="outcome">
      <div className="col-md-11 border p-3 bg-body-secondary rounded-4">
        <div className="col-md-12 p-5">
          <h2 className="d-flex justify-content-center">
            {props.statement}{" "}
            <span className="text-success fw-bold">&nbsp; {props.information} </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
