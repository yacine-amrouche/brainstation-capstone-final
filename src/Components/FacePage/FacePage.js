import "./FacePage.scss";
import React from "react";
import logo from "../../Assests/images/pexels-scott-webb-28061.jpg";

function FacePage() {
  return (
    <>
      <div className="home">
        <img className="home__page" src={logo} alt="home-page"></img>
      </div>
    </>
  );
}
export default FacePage;
