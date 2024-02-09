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
          I deployed the second iteration of my blog here at
          simonconrad.com/blog. I created this space to share more in depth my
          technical research and professional development.{" "}
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
