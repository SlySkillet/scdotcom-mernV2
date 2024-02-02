import "./projects-styles.css";
import Plunge from "./project-files/Plunge";

const Projects = function () {
  return (
    <div className="projects-container">
      <h2 className="projects-page-title">Projects</h2>
      <div className="main-projects-container">
        <Plunge />
      </div>
    </div>
  );
};

export default Projects;
