import React from 'react';
import TextGenerator from '../components/TextGenerator';

const GoogleAd = () => {
  return (
    <div>
      <h2>Google Ad Generator</h2>
      <TextGenerator apiUrl="http://localhost:8080/api/google-ad" />
    </div>
  );
};

export default GoogleAd;
