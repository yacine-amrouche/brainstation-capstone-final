import React from "react";

function ExercisesPage({ setExercises, bodyPart, exercises }) {
  return <p>SHOWING RESULTS</p>;
  {
    exercises.map((exercise, index) => <p>{exercise.name}</p>);
  }
}
export default ExercisesPage;
