import React, { useState } from 'react';
import '../App.css';
export default function QuestionBox({ question, onAnswerClick }) {
  const [isDarkMode, setDarkMode] = useState(false);
  const [highlightColor, setHighlightColor] = useState('');

  const handleDarkModeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  const handleOptionClick = (isCorrect) => {
    onAnswerClick(isCorrect); 
    setHighlightColor('');
  };

  const handleHighlightClick = () => {
    setHighlightColor('blue');
  };

  return (
    <>
      <div className={`container ${isDarkMode ? 'dark-bg' : ''}`}>
        <div className='nav flex'>
          <h1 className='logo'>Quiz</h1>
          <button className={`dark ${isDarkMode ? 'light-text' : ''}`} onClick={handleDarkModeToggle}>
            <h3>{isDarkMode ? 'Light' : 'Dark'}</h3>
          </button>
        </div>
        <div className='question'>
          <h2 className="queno">
            {`Question: ${question.id + 1} of 5`}
          </h2>
          <h1 className={`que ${highlightColor === 'blue' ? 'blue-text' : ''}`}>
            {question.text}
          </h1>
        </div>
        <div className='ans'>
          {question.options.map((option) => (
            <div key={option.id} className='a' onClick={() => handleOptionClick(option.isCorrect)}>
              {option.text}
            </div>
          ))}
        </div>
        <div className='HI flex'>
          <button className='Highlight hy flex' onClick={handleHighlightClick}>
            <h3>Highlight</h3>
          </button>
          <button className='Highlight didhy flex' onClick={() => setHighlightColor('')}>
            <h3>Reset Highlight</h3>
          </button>
        </div>
      </div>
    </>
  );
}

