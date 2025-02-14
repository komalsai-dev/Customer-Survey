import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SurveyScreen from './components/SurveyScreen';
import ThankYouScreen from './components/ThankYouScreen';

function App() {
  const questions = [
    { text: 'How satisfied are you with our products?', scale: 5 },
    { text: 'How fair are the prices compared to similar retailers?', scale: 5 },
    { text: 'How satisfied are you with the value for money of your purchase?', scale: 5 },
    { text: 'On a scale of 1-10, how would you recommend us to your friends and family?', scale: 10 },
    { text: 'What could we do to improve our service?', scale: 5 },
  ];

  const [showSurvey, setShowSurvey] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStartSurvey = () => {
    let sessionId = localStorage.getItem('surveySessionId');
    if (!sessionId) {
      sessionId = `session-${Date.now()}`;
      localStorage.setItem('surveySessionId', sessionId);
    }
  
    setShowSurvey(true);
  };
  
  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  
    // Save answer to local storage
    const sessionId = localStorage.getItem('surveySessionId');
    localStorage.setItem(`answer-${sessionId}-${index}`, JSON.stringify({
      questionId: `question-${index + 1}`,
      answer: answer,
    }));
  };
  
  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      const confirmed = window.confirm('Are you sure you want to submit the survey?');
      if (confirmed) {
        const sessionId = localStorage.getItem('surveySessionId');
        localStorage.setItem(`surveyStatus-${sessionId}`, 'COMPLETED');
  
        setShowSurvey(false);
        setShowThankYou(true);
      }
    } else {
      setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
    }
  };
  


const handleSkip = () => {
  const sessionId = localStorage.getItem('surveySessionId');
  localStorage.setItem(`answer-${sessionId}-${currentQuestionIndex}`, JSON.stringify({
    questionId: `question-${currentQuestionIndex + 1}`,
    answer: "SKIPPED",
  }));

  setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
};


  const handleReset = () => {
    setShowThankYou(false);
    setShowSurvey(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  return (
    <div className="App">
      {!showSurvey && !showThankYou && <WelcomeScreen onStart={handleStartSurvey} />}
      {showSurvey && (
        <SurveyScreen
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          onPrev={handlePrev}
          onNext={handleNext}
          onSkip={handleSkip} // Added skip button handler
          onAnswer={handleAnswer}
        />
      )}
      {showThankYou && <ThankYouScreen onReset={handleReset} />}
    </div>
  );
}

export default App;
