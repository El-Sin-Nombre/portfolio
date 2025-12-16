import Header from "../Header/Header";
import { projects } from "./Projects";
import { ProjectCard } from "./ProjectCard";
import "./Project.css";

export function Project() {
  return (
    <>
      <Header />
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </>
  );
}
