import React from "react";
import DataPiece from "./DataPiece";

export default function CustomerView(props){
    return(
        <div className="mt-5 d-flex justify-content-center">
        <div className="col-md-11 border p-3 bg-body-secondary rounded-4">
          <div className="col-md-12 d-flex justify-content-between">
            <div className="col-md-5 p-5">
              <h2 className="fw-bolder text-center">{props.cName}</h2>
            </div>
            <div className="col-md-5 p-5">
              <h3 className="fw-bolder text-end">Notify</h3>
            </div>
          </div>{" "}
          <hr />
          <div className="my-5">
            <DataPiece title="Annual Income " info={props.income}/>
            <DataPiece title="On-Time Or Missed " info={props.timeOrMissed}/>
            <DataPiece title="Installment" info={props.installment}/>
            <DataPiece title="Current Dept Amt " info={props.deptAmt}/>
            <DataPiece title="Interest Rate" info={props.intRate + "%"}/>
            <DataPiece title="Over Due Date" info={props.dueDate}/>

            
          </div>
          <br />
          <hr />
          <div className="col-md-12 d-flex justify-content-center p-3">
            {/* <div className="col-md-10"> */}
            <button type="submit" className="btn btn-primary p-3 rounded-5">
              <span className="fs-5">Check Your Credit Score</span>
            </button>
            {/* </div> */}
          </div>
          <span className="col-md-12 d-flex justify-content-center fs-6 fw-lighter text-warning">
            Check your Credit score Below 👇
          </span>
        </div>
      </div>
    );
}