import "./ExercisesPage.scss";
import React from "react";
import { Link } from "react-router-dom";

function ExercisesPage({ exercises }) {
  return (
    <>
      <h1 className="heading__exercises">Shows Results</h1>
      <h2 className="heading__info">choose 3 exercises for your workout</h2>
      <ul className="heading__sub">
        <li>Beginners: 5-10 minutes each exercise</li>
        <li>Intermediate: 10-20 minutes each exercise</li>
        <li>Advance: 20 minute and above each exercice</li>
      </ul>

      <Link to="/ExerciceDetail" className="menu">
        {exercises.map((item, i) => (
          <div className="Menu__card" key={`${item}-${i}`}>
            <img className="menu_img" src={item.gifUrl} alt="ex" />
            <button className="btna">{item.bodyPart}</button>
            <button className="btnb">{item.target}</button>
            <p className="name">{item.name}</p>
          </div>
        ))}
      </Link>
    </>
  );
}
export default ExercisesPage;
