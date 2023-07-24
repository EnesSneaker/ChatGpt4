import React from 'react';
import TextGenerator from '../components/TextGenerator';

const EmailAnswer = () => {
  return (
    <div>
      <h2>Email Answer Generator</h2>
      <TextGenerator apiUrl="http://localhost:8080/api/email-answer" />
    </div>
  );
};

export default EmailAnswer;
