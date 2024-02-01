import React from "react";

function IconMenu({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div>
          <p>{item.bodyPart}</p>
          <img src={item.gifUrl} />
        </div>
      ))}
    </div>
  );
}
export default IconMenu;
