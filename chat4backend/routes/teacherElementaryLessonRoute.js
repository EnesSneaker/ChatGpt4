const express = require('express');
const router = express.Router();
const chatGPTApi = require('../services/chatGPTService');

router.post('/teacher-elementary-lesson', async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Act like you experienced teacher which had over 30 years experience. Your students are between 6 and 10 years. The lesson for today: ${userInput}`;
  const max_tokens = 1000;
  const temperature = 0.5;
  const generatedText = await chatGPTApi(prompt, max_tokens, temperature);
  res.json({ adText: generatedText });
});

module.exports = router;