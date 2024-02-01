import React from "react";
import "./HomePage.scss";
import FacePage from "../../Components/FacePage/FacePage";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ExercisesPage from "../../Components/ExercisesPage/ExercisesPage";
import { useState } from "react";

function HomePage() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <FacePage />
      <SearchBar
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <ExercisesPage
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </>
  );
}
export default HomePage;
