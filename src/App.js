import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ExerciceDetail from "./Pages/ExerciceDetail/ExerciceDetail";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/excercice/:id" element={<ExerciceDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
