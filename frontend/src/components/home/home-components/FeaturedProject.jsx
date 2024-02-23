import "../home-styles.css";
import { Link } from "react-router-dom";

function ScrollToTopOnMount() {
  window.scrollTo(0, 0);
}

function FeaturedProject() {
  return (
    <div className="featured-project-container">
      <div className="featured-label">Featured project</div>
      <div className="featured-card">
        <div className="featured-image-container">
          <Link to="/blog">
            <img
              alt="blog"
              src="https://res.cloudinary.com/ddgt67wcb/image/upload/v1707445578/Screenshot_2024-02-08_at_9.24.53_PM_t0eibo.png"
              className="card-image"
              onClick={ScrollToTopOnMount}
            />
          </Link>
        </div>
        <p className="featured-description">
          My blog is a writing project where I am sharing interesting news and
          happenings in the industry alongside my documentation of my learning
          journey. This was an exploration of Express.js, MongoDB, and Nginx
          server configuration.{" "}
        </p>
        <div className="featured-links-box">
          <Link
            className="featured-button"
            to="/blog"
            onClick={ScrollToTopOnMount}
          >
            Visit my blog
          </Link>
          <Link
            className="featured-button"
            to="https://github.com/SlySkillet/scdotcom-mernV2"
          >
            View the code
          </Link>
          <Link
            className="featured-button"
            to="/projects"
            onClick={ScrollToTopOnMount}
          >
            More projects...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
