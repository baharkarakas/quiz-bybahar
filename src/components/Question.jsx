import React, { useState } from "react";

function Question({
  question,
  questionNumber,
  totalQuestions,
  handleAnswerClick,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleClick = (option) => {
    if (!showFeedback) {
      setSelectedAnswer(option);
      setShowFeedback(true);
      handleAnswerClick(option.isCorrect);

      setTimeout(() => {
        setSelectedAnswer(null);
        setShowFeedback(false);
      }, 1000);
    }
  };

  return (
    <div className="question-container">
      <div className="question-number">
        Question {questionNumber} of {totalQuestions}
      </div>
      <div className="question-text">{question.questionText}</div>
      <div className="answer-options">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            style={{
              backgroundColor: showFeedback
                ? option.isCorrect
                  ? "#34d399"
                  : selectedAnswer === option
                  ? "#e11d48"
                  : "#ccc"
                : "teal",
              color: "#fff",
              cursor: showFeedback ? "default" : "pointer",
            }}
            disabled={showFeedback}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
