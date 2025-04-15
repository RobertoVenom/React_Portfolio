// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      name: 'Self Portrait',
      description: 'A self portrait of me based on Picasso.',
      link: 'https://robertovenom.github.io/React_Portfolio/src/assest/IMG_0651.JPEG',
      image: '/asset/IMG_0651.JPEG',
    },
    {
      name: 'Mini Game',
      description: 'This Mini Game is made from Unity.',
      link: 'https://www.youtube.com/watch?v=w_ONHQGsShA',
      image: '/assest/Large Room.PNG',
    },
    {
      name: 'Project 3',
      description: 'A mobile app built with React Native.',
      link: 'https://gitproject3hub.com/user/',
      image: '/images/project3.jpg',
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
