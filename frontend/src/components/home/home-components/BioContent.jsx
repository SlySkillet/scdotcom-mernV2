import "../home-styles.css";
import { FaPython } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
function BioContent() {
  return (
    <div className="bio-container">
      <div className="aboutme-container">
        <p className="aboutme aboutme1">
          I am a bootcamp-trained software engineer specialized in Python and
          Javascript programming for full stack web development. I am a
          passionate creator with a background in art and fine dining. <br></br>
          <br></br> <FaPython className="aboutme-thumbnail py" />I have
          structured my journey in software engineering around project-based
          learning, independently and in the Hack Reactor Software Engineering
          Immersive. I began learning Python in morning sessions before kitchen
          shifts in Washington, DC. As someone who enjoys training skills, the
          daily practice grabbed me and I dove deeper into web development
          fundamentals. Gaining modest proficiency in building with vanilla
          javascript, html and css, I became interested in attending a bootcamp
          to accelerate my learning, receive professional guidance and bring me
          closer to an industry position.
        </p>
        <p className="aboutme aboutme2">
          I created simonconrad.com to present my projects and create a living
          document of my coding practice. Building it out has been a rewarding
          process and I’m pleased to see it take form. This is a portfolio, a
          writing project, and a platform for exploration. <br></br>
          <br></br>
          <DiNodejsSmall className="aboutme-thumbnail js" />I look forward to
          sharing my creations and research on today’s technology landscape with
          you.
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
