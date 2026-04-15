import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>

      <ProjectCard 
        title="Portfolio Website"
        description="My personal portfolio built with React."
        link="https://robertovenom.github.io/Coding-Portfolio/revise.html"
      />

      <ProjectCard 
        title="To-Do App"
        description="Task manager with local storage."
        link="https://www.figma.com/design/bZ6CluLPMA7m5SfjSo1nc7/TODO?m=auto&t=cdwOJkSX6k2djc5e-6"
      />

      <ProjectCard 
        title="Figma App"
        description="Uses API to fetch weather data."
        link="https://www.figma.com/design/MtOGnY2nXMbjyZpKmJ6iTt/Redesign-MCD-Mobile?m=auto&t=cdwOJkSX6k2djc5e-6"
      />

      <ProjectCard
        title="FPS Microgame Walkthough"
        description="This is my walkthough of my own minigame design."
        link="https://www.youtube.com/playlist?list=PLRebXhcu94nFzR2b1aEi5eNppg9XE6MFh"
      />
      
      <ProjectCard
        title="Self Portait"
        despcription=""
        link=""
      />

      <ProjectCard
        title="3D House"
        description=""
        link""
      />
    </section>
  );
}

export default Projects;
