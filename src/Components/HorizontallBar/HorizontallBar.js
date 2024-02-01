import "./HorizontallBar.scss";
import React from "react";
import dumbell from "../../Assests/images/Screen Shot 2024-02-01 at 12.40.48 PM.png";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function HorizontallBar({ data }) {
  return (
    <>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        className="mainbar"
      >
        {data.map((item) => (
          <div className="horizontall">
            <img className="dumbell__img" src={dumbell} />
            <p className="muscle__name">{item.bodyPart}</p>
          </div>
        ))}
      </ScrollMenu>
    </>
  );
}
function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div
      className="arrow"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    >
      Left
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div
      className="arrow"
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    >
      Right
    </div>
  );
}

export default HorizontallBar;
