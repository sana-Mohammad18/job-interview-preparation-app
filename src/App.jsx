import { useState } from "react";
import "./App.css";
import Practice from "./components/Practice";
import MockInterview from "./components/MockInterview";

function App() {
  const [selectedRole, setSelectedRole] = useState("");
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const startPractice = (role) => {
    setSelectedRole(role);
    setPage("practice");
  };

  const startMockInterview = (role) => {
    setSelectedRole(role);
    setPage("mock");
  };

  const goHome = () => {
    setPage("home");
    setSelectedRole("");
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <h1>🎯 Job Interview Preparation</h1>
          <p>Practice. Prepare. Succeed.</p>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Home Page */}
      {page === "home" && (
        <main className="home-container">
          <div className="hero-section">
            <h2>Prepare for Your Next Interview 🚀</h2>

            <p>
              Practice interview questions, test your knowledge,
              and improve your confidence.
            </p>
          </div>

          <div className="features">
            <div className="feature">
              <span>📚</span>
              <h3>Practice Questions</h3>
              <p>Learn with role-based interview questions.</p>
            </div>

            <div className="feature">
              <span>🎤</span>
              <h3>Mock Interview</h3>
              <p>Practice answering interview questions.</p>
            </div>

            <div className="feature">
              <span>📊</span>
              <h3>Track Progress</h3>
              <p>Track your completed questions.</p>
            </div>
          </div>

          <h2 className="choose-title">Choose Your Role</h2>

          <div className="role-container">
            {/* Python */}
            <div className="role-card">
              <div className="role-icon">🐍</div>

              <h2>Python</h2>

              <p>
                Practice Python, OOP, functions,
                lists and more.
              </p>

              <div className="role-buttons">
                <button
                  onClick={() => startPractice("Python")}
                >
                  📚 Practice
                </button>

                <button
                  onClick={() => startMockInterview("Python")}
                >
                  🎤 Mock Interview
                </button>
              </div>
            </div>

            {/* Frontend */}
            <div className="role-card">
              <div className="role-icon">💻</div>

              <h2>Frontend</h2>

              <p>
                Practice HTML, CSS, JavaScript
                and React questions.
              </p>

              <div className="role-buttons">
                <button
                  onClick={() => startPractice("Frontend")}
                >
                  📚 Practice
                </button>

                <button
                  onClick={() => startMockInterview("Frontend")}
                >
                  🎤 Mock Interview
                </button>
              </div>
            </div>

            {/* SQL */}
            <div className="role-card">
              <div className="role-icon">🗄️</div>

              <h2>SQL</h2>

              <p>
                Practice SQL, databases, joins,
                keys and queries.
              </p>

              <div className="role-buttons">
                <button
                  onClick={() => startPractice("SQL")}
                >
                  📚 Practice
                </button>

                <button
                  onClick={() => startMockInterview("SQL")}
                >
                  🎤 Mock Interview
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Practice Page */}
      {page === "practice" && selectedRole && (
        <Practice
          role={selectedRole}
          goHome={goHome}
        />
      )}

      {/* Mock Interview Page */}
      {page === "mock" && selectedRole && (
        <MockInterview
          role={selectedRole}
          goBack={goHome}
        />
      )}

      {/* Footer */}
      <footer>
        <p>
          © 2026 Job Interview Preparation App | Built with React.js
        </p>
      </footer>
    </div>
  );
}

export default App;