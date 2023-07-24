import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, TextField } from '@mui/material';

const InstagramCaption = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleGenerateCaption = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('/api/generate-caption', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCaption(response.data.caption);
    } catch (error) {
      console.error('Error generating caption:', error);
    }
  };

  return (
    <Container>
      <h2>Upload an image to generate an Instagram caption</h2>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span">
          Choose Image
        </Button>
      </label>
      <Button onClick={handleGenerateCaption} variant="contained">
        Generate Caption
      </Button>
      {caption && (
        <div>
          <h3>Generated Caption:</h3>
          <p>{caption}
          </p>
     </div>
   )}
 </Container>
);

};

export default InstagramCaption;