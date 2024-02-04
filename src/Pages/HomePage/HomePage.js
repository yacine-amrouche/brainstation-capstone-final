import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import FacePage from "../../Components/FacePage/FacePage";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ExercisesPage from "../../Components/ExercisesPage/ExercisesPage";
import HorizontallBar from "../../Components/HorizontallBar/HorizontallBar";
import { useNavigate } from "react-router-dom";

import { exerciseOptions, fetchData } from "../../Components/utils";

function HomePage() {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

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

  const handelBackToProgram = () => {
    navigate(-1);
  };

  return (
    <>
      <FacePage />
      <button onClick={handelBackToProgram} className="new__bnt">
        Back to program
      </button>
      <SearchBar setExercises={setExercises} />
      <HorizontallBar setExercises={setExercises} />
      <ExercisesPage exercises={exercises} />
    </>
  );
}
export default HomePage;
