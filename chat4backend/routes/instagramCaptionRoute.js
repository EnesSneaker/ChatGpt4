const express = require('express');
const multer = require('multer');
const chatGPTApi = require('../services/chatGPTService');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/instagram-caption', upload.single('image'), async (req, res) => {
  const imagePath = req.file.path;
  // Process the image (e.g., analyze the image content and create a descriptive prompt)

  const prompt = `Act like you are a professional Social Media Creator. Generate an engaging Instagram caption for a photo of ${imagePath}:`;
  const generatedText = await chatGPTApi(prompt);
  res.json({ caption: generatedText });

  // Remove the uploaded file after processing
  // fs.unlinkSync(imagePath);
});

module.exports = router;
