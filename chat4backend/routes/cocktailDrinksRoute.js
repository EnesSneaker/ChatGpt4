const express = require('express');
const router = express.Router();
const chatGPTApi = require('../services/chatGPTService');

router.post('/cocktail-drink', async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Act like you have a lot of experience as a Barkeeper. You created already a lot of drinks. You get an input and based on the input you create a cocktail. Print also the recipe. Input: ${userInput}`;
  const max_tokens = 300;
  const temperature = 0.7;
  const generatedText = await chatGPTApi(prompt, max_tokens, temperature);
  res.json({ adText: generatedText });
});

module.exports = router;