import React from "react";
import { Link } from "react-router-dom";

function BasicMenu(props) {
  return (
    <div className="flex space-x-5">
      <div>
        <Link to={"/"}>Main</Link>
      </div>
      <div>
        <Link to={"/about"}>adout</Link>
      </div>
    </div>
  );
}

export default BasicMenu;
