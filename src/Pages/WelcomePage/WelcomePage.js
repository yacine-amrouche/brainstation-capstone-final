import "./WelcomePage.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

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
          Get started
        </button>
      </div>
    </>
  );
}
export default WelcomePage;
