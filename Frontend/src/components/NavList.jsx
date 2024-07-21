import React from "react";
import { Link } from "react-router-dom";


export default function NavList(props) {
  return (
    <li className="nav-item">
      <Link onClick={props.onClick} className={"nav-link " + props.textcolor} to={props.where} >
        {props.pages}
      </Link>
    </li>
  );
} 
