import "../home-styles.css";
import { Link } from "react-router-dom";

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
            />
          </Link>
        </div>
        <p className="featured-description">
          My blog is a writing project where I am sharing interesting news and
          happenings in the industry alongside my documentation of my learning
          journey. You may visit it here at simonconrad.com/blog and view my
          code on github. This was an exploration of Express.js, MongoDB, and
          Nginx server configuration.{" "}
        </p>
        <div className="featured-links-box">
          <Link className="featured-button" to="/projects">
            Learn more
          </Link>
          <Link className="featured-button" to="/blog">
            Visit my blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
