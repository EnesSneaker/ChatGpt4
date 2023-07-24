const axios = require('axios');

const chatGPTApi = async (prompt, max_tokens, temperature) => {
  const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
    prompt: prompt,
    max_tokens: max_tokens,
    n: 1,
    stop: null,
    temperature: temperature,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CHATGPT_API_KEY}`,
    },
  });

  
  return response.data.choices[0].text.trim();
};

module.exports = chatGPTApi;

