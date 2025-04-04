// src/pages/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="hero bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
        <h1 className="text-4xl text-white text-center pt-32">Welcome to My Portfolio</h1>
      </div>
    </motion.div>
  );
};

export default HomePage;
