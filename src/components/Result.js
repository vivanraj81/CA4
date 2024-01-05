// Result.js
import React, { useState } from 'react';
import '../App.css';

export default function Result({ totalQuestions, score, restartQuiz }) {
  const [isDarkMode, setDarkMode] = useState(false);

  const calculatePercentage = () => {
    if (totalQuestions === 0) {
      return 0;
    }

    return Math.round((score / totalQuestions) * 100);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`container ${isDarkMode ? 'dark-bg' : ''}`}>
        <div className='nav flex'>
          <h1 className='logo'>Quiz</h1>
          <div className={`dark ${isDarkMode ? 'light-text' : ''}`} onClick={handleDarkModeToggle}>
            <h3>{isDarkMode ? 'Light' : 'Dark'}</h3>
          </div>
        </div>
        <div className='result'>
          <h1>Final Results</h1>
          <h2>{`You got ${score} out of ${totalQuestions} - (${calculatePercentage()}%)`}</h2>
        </div>
        <div className='Highlight re flex' onClick={restartQuiz}>
          <h3>Restart</h3>
        </div>
      </div>
    </>
  );
}

