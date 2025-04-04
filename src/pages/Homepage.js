// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
        <h1 className="text-4xl text-white text-center pt-32">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
};

export default HomePage;
