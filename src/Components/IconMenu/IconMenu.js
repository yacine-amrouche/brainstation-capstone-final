import "./IconMenu.scss";
import React from "react";

function IconMenu({ data }) {
  return (
    <div className="menu">
      {data.map((item) => (
        <div className="Menu__card">
          <img src={item.gifUrl} alt="ex" />
          <p className="name">{item.bodyPart}</p>
        </div>
      ))}
    </div>
  );
}
export default IconMenu;
