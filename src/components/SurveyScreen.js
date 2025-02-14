import React, { useState } from 'react';
import '../styles/App.css';

const SurveyScreen = ({ questions, currentQuestionIndex, onPrev, onNext, onAnswer }) => {
  const question = questions[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    onAnswer(currentQuestionIndex, answer);
  };

  const handleSkip = () => {
    onAnswer(currentQuestionIndex, null); 
    onNext(); 
  };

  return (
    <div className="container survey-container">
      <h1>Customer Survey</h1>
      <p className='my-p1'>
        {currentQuestionIndex + 1}/{questions.length}
      </p>
      <p className='my-p1'>
        {currentQuestionIndex + 1}. {question.text}
      </p>

      <div className="answers">
        {Array.from({ length: question.scale }, (_, i) => i + 1).map((value) => (
          <button
            key={value}
            className={`answer-button ${selectedAnswer === value ? 'selected' : ''}`}
            onClick={() => handleAnswerChange(value)}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="navigation-buttons">
        <button onClick={onPrev} disabled={currentQuestionIndex === 0}>
          Prev
        </button>
        <button onClick={handleSkip}>
          Skip
        </button>
        <button onClick={onNext}>
          {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default SurveyScreen;
