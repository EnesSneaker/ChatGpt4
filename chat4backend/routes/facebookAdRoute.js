const express = require('express');
const router = express.Router();
const chatGPTApi = require('../services/chatGPTService');

router.post('/facebook-ad', async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Act like you are a professional Social Media Creator. Write a creative ad for the following product to run on Facebook. It should contain a headline with 40 characters, a primary text with 125 character and a description with 30 characters. Product: ${userInput}`;
  //`Generate a creative and engaging Facebook ad text. // which should have a headline of max 40 characters, a primary text with max 125 characters and the description with max 30 characters for the following input: ${userInput}`
  const max_tokens = 380;
  const temperature = 0.7;
  const generatedText = await chatGPTApi(prompt, max_tokens, temperature);
  res.json({ adText: generatedText });
});

module.exports = router;