import React from "react";
import "./Header.scss";
//import logo from "../../Assests/images/1-1.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <p>FITCRAFT</p>
    </Link>
  );
}
export default Header;
