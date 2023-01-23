import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page</h2>
      <p>This is home page for this application</p>
      <button onClick={() => navigate('comments')}>Comments</button>
    </div>
  )
};