import React, { useEffect } from 'react';

const ThankYouScreen = ({ onReset }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReset();
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [onReset]);

  return (
    <div className="container thank-you-container">
      <h1>Thank You!</h1>
      <p>Thank you for taking the time to complete our survey!</p>
    </div>
  );
};

export default ThankYouScreen;
