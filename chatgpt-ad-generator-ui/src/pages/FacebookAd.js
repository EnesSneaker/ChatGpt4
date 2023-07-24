import React from 'react';
import TextGenerator from '../components/TextGenerator';

const FacebookAd = () => {
  return (
    <div>
      <h2>Facebook Ad Generator</h2>
      <TextGenerator apiUrl="http://localhost:8080/api/facebook-ad" />
    </div>
  );
};

export default FacebookAd;
