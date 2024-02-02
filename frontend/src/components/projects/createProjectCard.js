import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

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
  const [projectModal, setProjectModal] = useState(false);

  const handleCloseProjectModal = () => setProjectModal(false);
  const handleShowProjectModal = () => setProjectModal(true);

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
          {imageUrls.map((url) => {
            return (
              <Button onClick={handleShowProjectModal} key={url}>
                <img
                  className="screenshot"
                  src={url}
                  alt="screenshot"
                  width={imageWidth}
                />
              </Button>
            );
          })}
        </div>
        <Modal show={projectModal} onHide={handleCloseProjectModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{projectTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel data-bs-theme="dark" indicators={false}>
              {imageUrls.map((url) => {
                return (
                  <Carousel.Item key={url}>
                    <img className="d-block w-100" src={url} alt="screenshot" />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Modal.Body>
        </Modal>
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
