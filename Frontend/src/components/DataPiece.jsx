import React from "react";

export default function DataPiece(props) {
  return (
    <div className="col-md-7 text-start mx-5 my-3">
      <span>
        <h5 className="col-md-5  mx-3">
        {props.title} :&nbsp;{" "}
          <span className="text-success fw-bold"> {props.info}</span>
        </h5>
      </span>
    </div>
  );
}
