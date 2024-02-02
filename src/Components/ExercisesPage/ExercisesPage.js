import "./ExercisesPage.scss";
import React from "react";

function ExercisesPage({ exercises }) {
  return (
    <>
      <h1 className="heading__exercises">Shows Results</h1>
      <p className="heading__info">choose 3 exercises for your workout</p>
      <ul className="heading__sub">
        <li>Beginners: 5-10 minutes each exercise</li>
        <li>Intermediate: 10-20 minutes each exercise</li>
        <li>Advance: 20 minute and above each exercice</li>
      </ul>

      <div className="menu">
        {exercises.map((item, i) => (
          <div className="Menu__card" key={`${item}-${i}`}>
            <img src={item.gifUrl} alt="ex" />
            <p className="name">{item.bodyPart}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default ExercisesPage;
