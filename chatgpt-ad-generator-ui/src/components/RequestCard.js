import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RequestCard = ({ title, description, route }) => {
    const navigate = useNavigate();

  return (   
 <Card sx={{ minWidth: 275, marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => navigate(route)}>
        Generate
      </Button>
    </CardActions>
  </Card>
);
};

export default RequestCard;

   
