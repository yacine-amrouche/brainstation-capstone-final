import "./WelcomePage.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const savedUserAnswer = localStorage.getItem("nbDays");
    if (savedUserAnswer) {
      navigate(`/program/${savedUserAnswer}`);
    }
    console.log(savedUserAnswer);
  }, []);

  const handleGettingStarted = () => {
    navigate(`/quiz/1`);
  };

  return (
    <>
      <div className="welcome">
        <h1 className="welcome__heading">
          Science-backed workouts that get better as you do
        </h1>
        <p className="welcome_info">
          by studying your strengh & training ability, past workouts and gym
          setup, FITCRAFT creates a workouts tailored to you
        </p>
        <button className="welcome__btn" onClick={handleGettingStarted}>
          GET STARTED
        </button>
      </div>
    </>
  );
}
export default WelcomePage;
