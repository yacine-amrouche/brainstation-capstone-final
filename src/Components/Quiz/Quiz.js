import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizData from "../../Components/Data/Data.json";
import "./Quiz.scss";

const numberOfquestions = QuizData.length;

export default function Quiz() {
  const [question, setQuestion] = useState("");
  const [information, setInformation] = useState("");
  const [option, setOption] = useState([]);
  const [selected, setSelected] = useState("");
  const [answer, setAnswer] = useState([]);
  const [selectedResult, setSelectedResult] = useState([]);
  const [disableNext, setDisableNext] = useState(true);

  let { quizId } = useParams();
  const currentQuizId = parseInt(quizId);

  useEffect(() => {
    let selectedQuestion = QuizData.find((question) => question.id === quizId);
    if (selectedQuestion) {
      setQuestion(selectedQuestion.question);
      setInformation(selectedQuestion.information);
      setOption(selectedQuestion.answers);
    }
    console.log();
  }, [quizId]);

  const handleSelect = (option) => {
    setSelected(option);
    setDisableNext(false);
  };

  const generateCombinations = (currentAnswers, currentIndex) => {
    if (currentIndex === QuizData.length) {
      if ((currentAnswers = answer)) setSelectedResult(currentAnswers);
      return;
    }

    const currentQuestion = QuizData[currentIndex];

    for (const option of currentQuestion.answers) {
      generateCombinations([...currentAnswers, option], currentIndex + 1);
    }
  };

  useEffect(() => {
    generateCombinations([], 0);
  }, [quizId]);

  const navigate = useNavigate();

  const handleNext = () => {
    if (numberOfquestions == quizId) {
      navigate(`/program/${selectedResult[0]}`);
      return;
    }

    setAnswer((previousSelections) => [...previousSelections, selected]);
    let nextQuizId = parseInt(quizId) + 1;
    if (nextQuizId <= QuizData.length) {
      setDisableNext(true);
      navigate(`/quiz/${nextQuizId}`);
    } else if (nextQuizId === 7) {
      navigate(`/loading/${selectedResult}`);
    }
  };

  return (
    <section className="quiz">
      <div className="quiz__navbar">
        {Array.from({ length: QuizData.length }, (_, index) => (
          <div
            key={index + 1}
            className={`quiz__navbar-circle ${
              index + 1 === currentQuizId && "active"
            }`}
          ></div>
        ))}
      </div>
      <h2 className="quiz__title">
        Can you please answer to the question below
      </h2>
      <h2 className="quiz__question">{question}</h2>
      <p className="quiz__info">{information}</p>
      <div className="quiz__button-container">
        <ul className="quiz__answer-list">
          {option.map((option, index) => (
            <li key={index}>
              <button
                className="quiz__button"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="quiz__next"
          onClick={handleNext}
          disabled={disableNext}
        >
          Next
        </button>
      </div>
    </section>
  );
}
