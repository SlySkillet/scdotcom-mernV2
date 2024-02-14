import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
import "./contact-styles.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title-container">
        <h2 className="contact-title">Contact me</h2>
      </div>
      <div className="contact-info-container">
        <h3 className="contact-subtitle">social:</h3>
        <div className="contact-links-container">
          <Link
            to="https://www.linkedin.com/in/simon-conrad/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            LinkedIn <FaLinkedin className="button-icon" />
          </Link>
          <Link
            to="https://github.com/SlySkillet"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            GitHub <FaGithubAlt className="button-icon" />
          </Link>
        </div>
        <h3 className="contact-subtitle">email:</h3>
        <p className="contact-email" to="">
          simon@simonconrad.com
        </p>
        <h3 className="contact-subtitle">discord:</h3>
        <p className="contact-email">SlySkillet#1031</p>
        <div className="contact-summary">
          <p className="contact-detail">
            I invite you to reach out on any of the above platforms and view my
            open-source code on github. I am open to collaborate and open to
            work. Cheers!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
