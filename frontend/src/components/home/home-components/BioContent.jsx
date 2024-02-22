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
        <p className="skills-title">My toolkit</p>
        <table className="skills-box skills-box1">
          <thead className="skills-head">
            <tr>
              <th>Frontend</th>
            </tr>
          </thead>
          <tbody className="skills-details">
            <tr className="skill">
              <td>Javascript</td>
            </tr>
            <tr className="skill">
              <td>React.js</td>
            </tr>
            <tr className="skill">
              <td>Redux</td>
            </tr>
            <tr className="skill">
              <td>CSS</td>
            </tr>
            <tr className="skill">
              <td>HTML</td>
            </tr>
          </tbody>
        </table>
        <table className="skills-box skills-box2">
          <thead className="skills-head">
            <tr>
              <th>Backend</th>
            </tr>
          </thead>
          <tbody className="skills-details">
            <tr className="skill">
              <td>Python</td>
            </tr>
            <tr className="skill">
              <td>Django</td>
            </tr>
            <tr className="skill">
              <td>FastAPI</td>
            </tr>
            <tr className="skill">
              <td>MongoDB</td>
            </tr>
            <tr className="skill">
              <td>SQL</td>
            </tr>
            <tr className="skill">
              <td>RESTful API</td>
            </tr>
          </tbody>
        </table>
        <table className="skills-box skills-box3">
          <thead className="skills-head">
            <tr>
              <th>System</th>
            </tr>
          </thead>
          <tbody className="skills-details">
            <tr className="skill">
              <td>Docker</td>
            </tr>
            <tr className="skill">
              <td>Nginx</td>
            </tr>
            <tr className="skill">
              <td>Git Version Control</td>
            </tr>
            <tr className="skill">
              <td>Node.js</td>
            </tr>
            <tr className="skill">
              <td>VIM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BioContent;
