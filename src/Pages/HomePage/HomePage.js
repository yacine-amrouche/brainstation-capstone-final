import React, { useEffect } from "react";
import "./HomePage.scss";
import FacePage from "../../Components/FacePage/FacePage";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ExercisesPage from "../../Components/ExercisesPage/ExercisesPage";
import HorizontallBar from "../../Components/HorizontallBar/HorizontallBar";
import { useState } from "react";

const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
const exerciseOptions = {
  method: "GET",
  params: { limit: "20" },
  headers: {
    "X-RapidAPI-Key": "07a53eafedmsh3a73a35d496f8d6p12f62fjsn176506fcc3c4",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

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
    </>
  );
}
export default HomePage;
