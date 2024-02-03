import "./HorizontallBar.scss";
import React, { useEffect, useState } from "react";
import dumbell from "../../Assests/images/Screen Shot 2024-02-01 at 12.40.48 PM.png";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import {
  bodyPartsOptions,
  exerciseOptions,
  fetchData,
} from "../../Components/utils";

function HorizontallBar({ setExercises }) {
  const [bodyPart, setBodyPart] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        bodyPartsOptions
      );

      setBodyPart([
        ...bodyPartsData.filter((item) => !["cardio", "waist"].includes(item)),
      ]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async (search) => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/name/${search}`,
        exerciseOptions
      );

      setExercises(exercisesData);
    }
  };

  return (
    <>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        className="mainbar"
      >
        {bodyPart.map((bodyPart) => (
          <div
            className="horizontall"
            key={bodyPart}
            onClick={(e) => handleSearch(bodyPart)}
          >
            <img className="dumbell__img" src={dumbell} />
            <p className="muscle__name">{bodyPart.toUpperCase()}</p>
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
