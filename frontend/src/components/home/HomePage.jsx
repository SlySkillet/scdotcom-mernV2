import "./home-styles.css";
import { FaCode } from "react-icons/fa";

function HomePage() {
  return (
    <div className="home-container">
      <div className="title-page-container">
        <div className="about-container">
          <div className="box-left">
            <div className="name-box">
              <h1 className="name">Simon</h1>
              <h1 className="name">Conrad</h1>
            </div>
            <FaCode className="decoration" />
            <h5 className="my-title">Software Engineer</h5>
            <p className="tech-list">
              Python | Javascript | React | Django | FastAPI | SQL | MongoDB |
              Docker
            </p>
            <FaCode className="decoration" />
          </div>
          <img
            alt="simon"
            className="portrait"
            src="https://res.cloudinary.com/ddgt67wcb/image/upload/v1707233141/simon_comic_new_lyse4a.jpg"
          />
        </div>
        <div className="bio-container">
          <p></p>
          <div className="skills-container">
            <div className="skills-box">
              <h5 className="skills-head">Frontend</h5>
              <div className="skills-details">
                <p className="skill">Javascript</p>
                <p className="skill">React.js</p>
                <p className="skill">React Hooks</p>
                <p className="skill">Redux</p>
                <p className="skill">CSS</p>
                <p className="skill">HTML</p>
              </div>
            </div>
            <div className="skills-box">
              <h5 className="skills-head">Backend</h5>
              <div className="skills-details">
                <p className="skill">Python</p>
                <p className="skill">Django</p>
                <p className="skill">FastAPI</p>
                <p className="skill">MongoDB</p>
                <p className="skill">SQL</p>
                <p className="skill">RESTful API</p>
              </div>
            </div>
            <div className="skills-box">
              <h5 className="skills-head">System</h5>
              <div className="skills-details">
                <p className="skill">Docker</p>
                <p className="skill">Nginx</p>
                <p className="skill">Git Version Control</p>
                <p className="skill">Node.js</p>
                <p className="skill">VIM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
