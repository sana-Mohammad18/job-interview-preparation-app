import { useState } from "react";
import questions from "../data/questions";

function MockInterview({ role, goBack }) {
  const roleQuestions = questions.filter(
    (question) => question.role === role
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (roleQuestions.length === 0) {
    return (
      <div className="container">
        <h2>No questions available</h2>
        <button onClick={goBack}>Back</button>
      </div>
    );
  }

  const question = roleQuestions[currentQuestion];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion < roleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
      setSubmitted(false);
    }
  };

  return (
    <div className="container mock-interview">

      <button onClick={goBack}>← Back</button>

      <h1>🎤 Mock Interview</h1>

      <p>
        Question {currentQuestion + 1} of {roleQuestions.length}
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${
              ((currentQuestion + 1) / roleQuestions.length) * 100
            }%`,
          }}
        ></div>
      </div>

      <div className="question-card">

        <h2>{question.question}</h2>

        <textarea
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows="6"
        />

        <br />

        {!submitted && (
          <button onClick={handleSubmit}>
            Submit Answer
          </button>
        )}

        {submitted && (
          <div className="feedback">

            <h3>Reference Answer</h3>

            <p>{question.answer}</p>

            {currentQuestion < roleQuestions.length - 1 ? (
              <button onClick={handleNext}>
                Next Question →
              </button>
            ) : (
              <h3>🎉 Mock Interview Completed!</h3>
            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default MockInterview;