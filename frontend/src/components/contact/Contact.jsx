import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title-container">
        <h2 className="contact-title">Contact me</h2>
      </div>
      <div className="contact-info-container">
        <div className="inner-contact-info-container">
          <h3 className="contact-subtitle">Social:</h3>
          <div className="contact-links-container">
            <Link
              to="https://www.linkedin.com/in/simon-conrad/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              LinkedIn <FaLinkedin />
            </Link>
            <Link
              to="https://github.com/SlySkillet"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              GitHub <FaGithubAlt />
            </Link>
          </div>
          <h3 className="contact-subtitle">Email:</h3>
          <p className="contact-email" to="">
            simon@simonconrad.com
          </p>
          <h3 className="contact-subtitle">Discord:</h3>
          <p className="contact-email">SlySkillet#1031</p>
          <div className="contact-summary">
            <p className="contact-detail">
              I am active on all of the above platforms. Please connect with me
              on LinkedIn and reach out by whatever method you prefer. I am open
              to collaborate on projects and open for work. Looking forward to
              hearing from you. Cheers!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
