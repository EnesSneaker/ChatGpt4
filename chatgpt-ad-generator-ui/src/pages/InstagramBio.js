import React from 'react';
import TextGenerator from '../components/TextGenerator';

const InstagramBio = () => {
  return (
    <div>
      <h2>Instagram Bio Generator</h2>
      <TextGenerator apiUrl="http://localhost:8080/api/instagram-bio" />
    </div>
  );
};

export default InstagramBio;
