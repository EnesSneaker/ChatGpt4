const express = require('express');
const router = express.Router();
const chatGPTApi = require('../services/chatGPTService');

router.post('/teacher-high-school-lesson', async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Act like you experienced teacher which had over 30 years experience. Your students are between 10 and 13 years. The lesson for today: ${userInput}`;
  const max_tokens = 1000;
  const temperature = 0.6;
  const generatedText = await chatGPTApi(prompt, max_tokens, temperature);
  res.json({ adText: generatedText });
});

module.exports = router;