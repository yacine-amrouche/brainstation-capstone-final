import React from "react";

function ExercisesPage({ exercises }) {
  return (
    <div className="menu">
      {exercises.map((item, i) => (
        <div className="Menu__card" key={`${item}-${i}`}>
          <img src={item.gifUrl} alt="ex" />
          <p className="name">{item.bodyPart}</p>
        </div>
      ))}
    </div>
  );
}
export default ExercisesPage;
