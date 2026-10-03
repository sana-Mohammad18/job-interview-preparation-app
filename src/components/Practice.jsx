import { useState } from "react";
import questions from "../data/questions";
import QuestionCard from "./QuestionCard";

function Practice({ role, goHome }) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [completedQuestions, setCompletedQuestions] = useState([]);

  const roleQuestions = questions.filter(
    (question) => question.role === role
  );

  const filteredQuestions = roleQuestions.filter((question) => {
    const matchesSearch = question.question
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || question.difficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  const handleComplete = (questionId) => {
    if (!completedQuestions.includes(questionId)) {
      setCompletedQuestions((previous) => [
        ...previous,
        questionId,
      ]);
    }
  };

  const progress =
    roleQuestions.length === 0
      ? 0
      : Math.round(
          (completedQuestions.length / roleQuestions.length) * 100
        );

  return (
    <div className="page-container">
      <button className="back-button" onClick={goHome}>
        ← Back to Home
      </button>

      <div className="page-title">
        <h1>{role} Interview Practice</h1>
        <p>Practice questions and improve your interview skills.</p>
      </div>

      {/* Progress */}
      <div className="progress-card">
        <div className="progress-header">
          <div>
            <h2>📊 Your Progress</h2>
            <p>
              {completedQuestions.length} of {roleQuestions.length} questions
              completed
            </p>
          </div>

          <div className="progress-percentage">
            {progress}%
          </div>
        </div>

        <div className="progress-bar-background">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Search and filter */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="🔍 Search questions..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <p className="question-count">
        Showing {filteredQuestions.length} question
        {filteredQuestions.length !== 1 ? "s" : ""}
      </p>

      {/* Questions */}
      <div className="questions-list">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onComplete={handleComplete}
            />
          ))
        ) : (
          <div className="no-results">
            <h2>😕 No questions found</h2>
            <p>Try another search or difficulty.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Practice;