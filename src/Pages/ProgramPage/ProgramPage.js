import "./ProgramPage.scss";
import React, { useEffect, useState } from "react";
import Exercises from "../../Components/Data/Exercises.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function WelcomePage() {
  let { number } = useParams();
  let program = {};

  if (number === "three-times") {
    program = Exercises[3];
  }

  if (number === "twice") {
    program = Exercises[2];
  }

  if (number === "once") {
    program = Exercises[1];
  }

  const days = Object.keys(program);
  const navigate = useNavigate();
  const handelGetHome = () => {
    navigate("/HomePage");
  };

  return (
    <>
      <h1 className="header__program">
        This Program was created for you, tailord from you answers
      </h1>
      {days.map((day, i) => (
        <div className="header__div" key={`${i}${day}`}>
          <h2 className="days">{day}</h2>
          <hr></hr>
          {Object.keys(program[day]).map((muscle, index) => (
            <div key={`${index}${muscle}`}>
              <p className="muscle">{muscle}</p>
              {program[day][muscle].map((exercise, n) => (
                <p className="program" key={`${n}${exercise}`}>
                  {exercise.name}
                </p>
              ))}
              <hr></hr>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handelGetHome} className="welcome__bnt">
        SEARCH EXERCISES DETAILS
      </button>
    </>
  );
}
export default WelcomePage;
