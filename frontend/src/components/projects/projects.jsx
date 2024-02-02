import "./projects-styles.css";
import Plunge from "./project-files/Plunge";
import RadCar from "./project-files/RadCar";
import TaskManager from "./project-files/TaskManager";
import BlogProject from "./project-files/BlogProject";

const Projects = function () {
  return (
    <div className="projects-container">
      <h2 className="projects-page-title">Projects</h2>
      <div className="main-projects-container">
        <BlogProject />
        <Plunge />
        <RadCar />
        <TaskManager />
      </div>
    </div>
  );
};

export default Projects;
