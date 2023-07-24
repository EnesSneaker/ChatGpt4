import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/facebook-ad', label: 'Facebook Ad' },
    { path: '/google-ad', label: 'Google Ad' },
    { path: '/instagram-bio', label: 'Instagram Bio' },
    { path: '/instagram-caption', label: 'Instagram Caption' },
    { path: '/email-answer', label: 'Answer Email' },
    { path: '/teacher-elementary-lesson', label: 'Teacher Elementary Lesson' },
    { path: '/teacher-high-school-lesson', label: 'Teacher High School Lesson' },
    { path: '/cocktail-drink', label: 'Cocktail drink' },
    { path: '/meal', label: 'Meal' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: '240px',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: '240px', boxSizing: 'border-box' },
      }}
    >
      <List>
        {routes.map((route, index) => (
          <ListItem button key={index} component={Link} to={route.path}>
            <ListItemText primary={route.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
