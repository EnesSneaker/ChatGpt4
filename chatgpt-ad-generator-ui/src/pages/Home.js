import React from 'react';
import RequestCard from '../components/RequestCard';

const Home = () => {
  const requests = [
    {
      title: 'Facebook Ad',
      description: 'Generate a creative and engaging Facebook ad text.',
      route: '/facebook-ad',
    },
    {
      title: 'Google Ad',
      description: 'Generate a high-converting Google ad text.',
      route: '/google-ad',
    },
    {
      title: 'Instagram Bio',
      description: 'Create a catchy and memorable Instagram bio.',
      route: '/instagram-bio',
    },
    {
        title: "Instagram Caption",
        description: 'Create a catchy Instagram caption',
        route: '/instagram-caption',
    },
    {
      title: "Answer email",
      description: 'Create a email',
      route: '/email-answer',
    },
    {
      title: "Teacher Elementary lesson",
      description: 'Create a lesson',
      route: '/teacher-elementary-lesson',
    },
    {
      title: "Teacher High School lesson",
      description: 'Create a lesson',
      route: '/teacher-high-school-lesson',
    },
    {
      title: "Cocktail Drink",
      description: 'Create a drink',
      route: '/cocktail-drink',
    },
    {
      title: "Meal",
      description: 'Create a meal',
      route: '/meal',
    },
  ];

  return (
    <div>
      {requests.map((request, index) => (
        <RequestCard key={index} {...request} />
      ))}
    </div>
  );
};

export default Home;
