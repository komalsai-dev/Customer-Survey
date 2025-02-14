import React from 'react';
import '../styles/App.css'; 

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="container">
      <h1>Welcome to Our Customer Survey</h1>
      <p className="my-p">We appreciate your feedback. Please click the button below to start the survey.</p>
      <button onClick={onStart}>Start Survey</button>
    </div>
  );
};

export default WelcomeScreen;
