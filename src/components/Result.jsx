import React from "react";

function Result({ score, totalQuestions }) {
  return (
    <div className="result-container">
      <h2>Quiz completed! </h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
}
export default Result;
