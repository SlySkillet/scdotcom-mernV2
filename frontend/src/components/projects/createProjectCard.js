import { Link } from "react-router-dom";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Carousel from "react-bootstrap/Carousel";

function ProjectCard({
  projectTitle,
  completedDate,
  imageUrls,
  imageWidth,
  techIcons,
  description,
  liveLink,
  repoLink,
  techStack,
  rightOrLeft,
}) {
  //   const [projectModal, setProjectModal] = useState(false);

  //   const handleCloseProjectModal = () => setProjectModal(false);
  //   const handleShowProjectModal = () => setProjectModal(true);

  const projectLinkJSX = (liveLink, repoLink) => {
    if (liveLink) {
      return (
        <p className="project-detail">
          Deployed app:{" "}
          <Link
            className="project-link"
            to={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {projectTitle}{" "}
          </Link>{" "}
          | Repo:{" "}
          <Link
            className="project-link"
            to={repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub{" "}
          </Link>
        </p>
      );
    } else {
      return (
        <p className="project-detail">
          Repo:{" "}
          <Link
            className="project-link"
            to={repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub{" "}
          </Link>
        </p>
      );
    }
  };

  return (
    <div className={rightOrLeft}>
      <div className="project-card">
        <div className="project-header">
          <h5 className="project-description project-title">{projectTitle}</h5>
          <p className="shaded-text">{completedDate}</p>
        </div>
        <div className="screenshots-container">
          {imageUrls
            ? imageUrls.map((url) => {
                return (
                  <Link
                    to={url}
                    key={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="screenshot"
                      src={url}
                      alt="screenshot"
                      width={imageWidth}
                    />
                  </Link>
                );
              })
            : null}
        </div>
        <div className="tech-icons-container">
          {techIcons.map((icon) => (
            <div className="tech-icon" key={icon}>
              {icon}
            </div>
          ))}
        </div>
        <p className="project-description">{description}</p>
        <div className="project-detail-container">
          {projectLinkJSX(liveLink, repoLink)}
        </div>
        <div className="project-detail-container">
          <p className="project-detail">{techStack}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
