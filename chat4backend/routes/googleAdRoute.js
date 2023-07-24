const express = require('express');
const router = express.Router();
const chatGPTApi = require('../services/chatGPTService');

router.post('/google-ad', async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Act like you are a professional Social Media Creator. Write a creative ad for the following product to run on Google. The ad text should have a headline a body and a call to action.
  Product ${userInput}`;
  //Generate a high-converting Google ad text with a headline a body and a call to action of max 30 characters each for the following input: ${userInput}
  const max_tokens = 140;
  const temperature = 0.7;
  const generatedText = await chatGPTApi(prompt, max_tokens, temperature);
  res.json({ adText: generatedText });
});

module.exports = router;
