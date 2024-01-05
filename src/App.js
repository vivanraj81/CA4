import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function YourMainComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  console.log("currentQuestionIndex", currentQuestionIndex);
  console.log("questions.length", questions.length);

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <QuestionBox
          question={questions[currentQuestionIndex]}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <Result
          totalQuestions={questions.length}
          score={score}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default YourMainComponent;

