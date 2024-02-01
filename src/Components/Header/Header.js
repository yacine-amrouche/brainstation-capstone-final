import React from "react";
import "./Header.scss";
import logo from "../../Assests/images/Arrow .png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <p className="header__logo">FITCRAFT</p>
      </Link>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
export default Header;
