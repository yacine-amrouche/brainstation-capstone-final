import React, { useSyncExternalStore } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const bodyPartsOptions = {
  method: "GET",
  params: { limit: "20" },
  headers: {
    "X-RapidAPI-Key": "07a53eafedmsh3a73a35d496f8d6p12f62fjsn176506fcc3c4",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

function ExerciceDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercice${id}`,
        bodyPartsOptions
      );

      setExerciseDetail(fetchExercisesData);
      console.log(fetchExercisesData);
    };
    fetchExercisesData();
  }, [id]);

  return;
  <>
    <p>exerciseswtails</p>
  </>;
}
export default ExerciceDetail;
