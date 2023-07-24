const express = require('express');
const router = express.Router();
const chatGPTApi = require('../services/chatGPTService');

router.post('/instagram-bio', async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Act like you are a professional Social Media Creator. Generate a short exciting Bio for a Instagram profil which should contain also emojis about: ${userInput}`;
  //Create a catchy and memorable Instagram bio for the following input: ${userInput}
  const max_tokens = 100;
  const temperature = 0.7;
  const generatedText = await chatGPTApi(prompt, max_tokens, temperature);
  res.json({ bio: generatedText });
});

module.exports = router;
