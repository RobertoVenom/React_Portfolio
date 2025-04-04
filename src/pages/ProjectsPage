// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'A web app built with React.',
      link: 'https://github.com/user/project1',
      image: '/images/project1.jpg',
    },
    {
      name: 'Project 2',
      description: 'A full-stack app built with Node.js and MongoDB.',
      link: 'https://github.com/user/project2',
      image: '/images/project2.jpg',
    },
    {
      name: 'Project 3',
      description: 'A mobile app built with React Native.',
      link: 'https://github.com/user/project3',
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
