import ProjectCards from "../components/ui/ProjectCards";
import classes from "./css/Projects.module.css";

const projects = [
  {
    id: "m1",
    name: "Mental Wellness @ BCIT",
    position: "Front-end, Back-end Developer",
    description:
      "Help BCIT students assess their wellness needs and gather all available support at BCIT",
    link: "https://comp1800-bby26.web.app/",
  },
  {
    id: "m2",
    name: "Social Media",
    position: "Full Stack Developer",
    description:
      "Allow users to send a post, follow their friends and be followed by their friends.(Work in progress)",
    link: "https://github.com/BrianChung95/Social-Media",
  },
  {
    id: "m3",
    name: "My Portfolio",
    position: "Front-end Developer",
    description: "Everything about me! (This website. Link to GitHub)",
    link: "https://github.com/BrianChung95/My-Portfolio",
  },
];

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className={classes.container}>
        {projects.map((project) => {
          return (
            <ProjectCards
              key={projects.id}
              className={project.id}
              name={project.name}
              position={project.position}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
