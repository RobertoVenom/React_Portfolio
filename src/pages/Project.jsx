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
        link="#"
      />

      <ProjectCard 
        title="Figma App"
        description="Uses API to fetch weather data."
        link="#"
      />
    </section>
  );
}

export default Projects;
