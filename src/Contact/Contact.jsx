import Header from "../Header/Header";
import linkedinLogo from "../assets/linkedin.png";
import "./Contact.css";

export function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h2>Connect With Me</h2>
        <p className="contact-text">
          I’m open to internships, full-time roles, and collaboration opportunities.
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="contact-details">
         
          <p> <b>Email : </b>shrijaymore143@gmail.com</p>
        </div>

        <div className="contact-actions">
          <a
            href="https://linkedin.com/in/shrijay-more-574468289"
            target="_blank"
            rel="noreferrer"
            className="contact-btn linkedin"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
            LinkedIn
          </a>

        </div>
      </div>
    </>
  );
}
