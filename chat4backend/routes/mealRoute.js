const express = require('express');
const router = express.Router();
const chatGPTApi = require('../services/chatGPTService');

router.post('/meal', async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Act like a experienced cook which had a excellent Gault-Millau rating. Give the best meal based on the input. After that also print the recipe and give me a link to a current matching site. Input: ${userInput}`;
  const max_tokens = 1000;
  const temperature = 0.6;
  const generatedText = await chatGPTApi(prompt, max_tokens, temperature);
  res.json({ adText: generatedText });
});

module.exports = router;