import "./ProgramPage.scss";
import React from "react";
import Exercises from "../../Components/Data/Exercises.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const getProgram = (number) => {
  let program = {};
  if (number === "three-times") {
    program = Exercises[3];
  } else if (number === "twice") {
    program = Exercises[2];
  } else if (number === "once") {
    program = Exercises[1];
  }

  if (program) {
    localStorage.setItem("nbDays", number);
  }

  return program;
};

function WelcomePage() {
  const { number } = useParams();
  const navigate = useNavigate();
  const program = getProgram(number);

  const days = Object.keys(program);

  const handelGetHome = () => {
    navigate("/HomePage");
  };

  const handelNewProgram = () => {
    localStorage.removeItem("nbDays");
    navigate("/");
  };

  return (
    <>
      <h1 className="header__program">
        This Program was created fot you tailord from you answers
      </h1>

      <button onClick={handelNewProgram} className="new__bnt">
        Create a new program
      </button>

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
        Search exercise Details
      </button>
    </>
  );
}
export default WelcomePage;
