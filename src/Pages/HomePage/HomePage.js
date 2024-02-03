import React, { useEffect } from "react";
import "./HomePage.scss";
import FacePage from "../../Components/FacePage/FacePage";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ExercisesPage from "../../Components/ExercisesPage/ExercisesPage";
import HorizontallBar from "../../Components/HorizontallBar/HorizontallBar";
import { useState } from "react";
import Quiz from "../../Components/Quiz/Quiz";

import { exerciseOptions, fetchData } from "../../Components/utils";

function HomePage() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, []);

  return (
    <>
      <FacePage />

      <SearchBar setExercises={setExercises} />
      <HorizontallBar setExercises={setExercises} />
      <ExercisesPage exercises={exercises} />
      <Quiz />
    </>
  );
}
export default HomePage;
