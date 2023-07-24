import React from 'react';
import TextGenerator from '../components/TextGenerator';

const CocktailDrink = () => {
  return (
      <div>
      <h2>Cocktail Drink Generator</h2>
      <TextGenerator apiUrl="http://localhost:8080/api/cocktail-drink" />
    </div>
  );
};

export default CocktailDrink;
