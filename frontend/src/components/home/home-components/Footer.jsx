import "../home-styles.css";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
  return (
    <div className="footer-container">
      <p className="thanks">Thank you for visiting!</p>
      <Link to="/contact" className="contact-me">
        Contact me
      </Link>
      <div className="footer-link-box">
        <Link
          className="footer-link"
          to="https://www.linkedin.com/in/simon-conrad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </Link>
        <Link
          className="footer-link"
          to="https://github.com/SlySkillet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
