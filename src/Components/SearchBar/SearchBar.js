import "./SearchBar.scss";
import React from "react";
import { useState } from "react";

import { exerciseOptions, fetchData } from "../../Components/utils";

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
