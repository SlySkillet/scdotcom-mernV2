import "../home-styles.css";
import { FaPython } from "react-icons/fa";
function BioContent() {
  return (
    <div className="bio-container">
      <div className="aboutme-container">
        <p className="aboutme aboutme1">
          <FaPython className="aboutme-thumbnail" />I am a bootcamp-trained
          software engineer specializing in python and javascript programming
          for full stack web development. I am a passionate creator with a
          background in art and fine dining. <br></br>
          <br></br>
          My journey in software engineering has revolved around project-based
          learning, independently and in the Hack Reactor Software Engineering
          Immersive. I became interested in attending a bootcamp while exploring
          python fundamentals on my own in the mornings before my kitchen
          shifts.
        </p>
        <p className="aboutme aboutme2">
          I put this site together to present my projects and create a living
          document of my coding practice. Building out my corner of the internet
          has been a rewarding process and I’m pleased to see it take form. I’m
          excited to iterate simonconrad.com further in my exploration of
          today’s technology landscape.
        </p>
      </div>
      <div className="skills-container">
        <p className="label">My Toolkit</p>
        <div className="skills-box skills-box1">
          <h5 className="skills-head">Frontend</h5>
          <div className="skills-details">
            <p className="skill">Javascript</p>
            <p className="skill">React.js</p>
            <p className="skill">Redux</p>
            <p className="skill">CSS</p>
            <p className="skill">HTML</p>
          </div>
        </div>
        <div className="skills-box skills-box2">
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
        <div className="skills-box skills-box3">
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
  );
}

export default BioContent;
