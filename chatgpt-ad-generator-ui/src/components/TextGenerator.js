import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const TextGenerator = ({ apiUrl }) => {
  const [userInput, setUserInput] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post(apiUrl, { userInput });
      setGeneratedText(response.data.adText || response.data.bio);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  };

  return (
    <div>
      <TextField
        label="User Input"
        fullWidth
        margin="normal"
        variant="outlined"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generate
      </Button>
      {generatedText && (
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {generatedText}
        </Typography>
      )}
    </div>
  );
};

export default TextGenerator;
