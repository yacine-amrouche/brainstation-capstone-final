import "./ProgramPage.scss";
import React, { useEffect, useState } from "react";
import Exercises from "../../Components/Data/Exercises.json";
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

  return (
    <>
      <h1 className="header__program">
        This Program was created fot you tailord from you answers
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
    </>
  );
}
export default WelcomePage;
