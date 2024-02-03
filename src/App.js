import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ExerciceDetail from "./Pages/ExerciceDetail/ExerciceDetail";
import Header from "./Components/Header/Header";
import Quiz from "./Components/Quiz/Quiz";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/excercice/:id" element={<ExerciceDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
