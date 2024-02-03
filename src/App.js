import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import ProgramPage from "./Pages/ProgramPage/ProgramPage";
import Header from "./Components/Header/Header";
import Quiz from "./Components/Quiz/Quiz";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/program/:number" element={<ProgramPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
