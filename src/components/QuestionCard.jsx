import { useState } from "react";

function QuestionCard({ question, onComplete }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    if (!completed) {
      setCompleted(true);
      onComplete(question.id);
    }
  };

  return (
    <div className="question-card">
      <div className="question-top">
        <span className={`difficulty ${question.difficulty.toLowerCase()}`}>
          {question.difficulty}
        </span>
      </div>

      <h3>{question.question}</h3>

      <div className="question-buttons">
        <button
          className="show-button"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "🙈 Hide Answer" : "👁️ Show Answer"}
        </button>

        <button
          className="complete-button"
          onClick={handleComplete}
          disabled={completed}
        >
          {completed ? "✅ Completed" : "☑️ Mark as Completed"}
        </button>
      </div>

      {showAnswer && (
        <div className="answer-box">
          <strong>Answer:</strong>
          <p>{question.answer}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;