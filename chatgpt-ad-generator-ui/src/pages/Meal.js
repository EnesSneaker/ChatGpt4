import React from 'react';
import TextGenerator from '../components/TextGenerator';

const Meal = () => {
  return (
    <div>
      <h2>Meal Generator</h2>
      <TextGenerator apiUrl="http://localhost:8080/api/meal" />
    </div>
  );
};

export default Meal;
