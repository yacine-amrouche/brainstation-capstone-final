import "./SearchBar.scss";
import React from "react";
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

function SearchBar({ setExercises }) {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/name/${search}`,
        exerciseOptions
      );

      setSearch("");
      setExercises(exercisesData);
    }
  };

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
    </>
  );
}
export default SearchBar;
