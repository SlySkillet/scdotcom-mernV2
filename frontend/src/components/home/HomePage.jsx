import "./home-styles.css";
import { FaCode } from "react-icons/fa";

function HomePage() {
  return (
    <div className="home-container">
      <div className="about-container">
        <div className="box-left">
          <div className="name-box">
            <h1 className="name">Simon</h1>
            <h1 className="name">Conrad</h1>
          </div>
          <FaCode className="decoration" />
          <h5 className="title">Software Engineer</h5>
          <p className="tech-list">
            Python | Javascript | React | Django | FastAPI | SQL | Docker
          </p>
          <FaCode className="decoration" />
        </div>
        <img
          alt="simon"
          className="portrait"
          src="https://res.cloudinary.com/ddgt67wcb/image/upload/v1707233141/simon_comic_new_lyse4a.jpg"
        />
      </div>
    </div>
  );
}

export default HomePage;
