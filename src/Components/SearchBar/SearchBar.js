import "./SearchBar.scss";
import React from "react";
import { useEffect, useState } from "react";
import IconMenu from "../IconMenu/IconMenu";
import HorizontallBar from "../HorizontallBar/HorizontallBar";

function SearchBar({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/${search}`,
        exerciseOptions
      );

      setBodyPart([...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises${search}`,
        exerciseOptions
      );
      console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.includes(search) ||
          exercise.target.includes(search) ||
          exercise.bodyPart.includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  };
  const exerciseOptions = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": "07a53eafedmsh3a73a35d496f8d6p12f62fjsn176506fcc3c4",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  console.log(bodyPart);
  return (
    <>
      <p className="search__header">Awesome Exercises You Should Know</p>
      <div className="search__bar">
        <textarea
          className="search__input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        >
          Search Exercises
        </textarea>
        <button onClick={handleSearch} className="search__btn">
          SEARCH
        </button>
      </div>
      <HorizontallBar data={bodyPart} />
      <IconMenu data={bodyPart} />
    </>
  );
}
export default SearchBar;
