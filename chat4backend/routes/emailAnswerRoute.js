const express = require('express');
const router = express.Router();
const chatGPTApi = require('../services/chatGPTService');

router.post('/email-answer', async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Act like you have a lot of experience in answering Emails. You get an Email and need to answered it. Email: ${userInput}`;
  const max_tokens = 1000;
  const temperature = 0.2;
  const generatedText = await chatGPTApi(prompt, max_tokens, temperature);
  res.json({ adText: generatedText });
});

module.exports = router;