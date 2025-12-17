import Header from "../Header/Header";
import "./Resume.css";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
export function Resume() {
  return (
    <>
      <Header />
      <div className="download-resume-wrapper">
        <a href="/shrijay_resume.pdf" download className="download-btn">
          Download Resume
        </a>
      </div>
      <div className="resume-container">
        <section className="resume-header">
          <div className="resume-intro">
            <h1>Shrijay More</h1>
            <p>
              Aspiring Software Developer with a strong foundation in
              object-oriented programming, data structures, algorithms, and
              DBMS. Familiar with the MERN stack and databases such as MongoDB
              and MySQL, and currently pursuing an MCA. Proficient in Java, C++,
              and JavaScript, with a keen interest in continuous learning and
              contributing to real-world software projects.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h3>Contact</h3>
          <div className="contact-logos">
            <p>Email: shrijaymore143@gmail.com</p>

            <div className="contact-item">
              <span>GitHub:</span>
              <a
                href="https://github.com/El-Sin-Nombre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="GitHub" />
              </a>
            </div>

            <div className="contact-item">
              <span>LinkedIn:</span>
              <a
                href="https://linkedin.com/in/shrijay-more-574468289"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </section>
        <section className="resume-section">
          <h3>Education</h3>
          <div className="education">
            <div className="edu-row">
              <h4>Master of Computer Application (MCA)</h4>
              <span className="edu-year">2024 - 2026</span>
            </div>
            <p>
              Bharati Vidyapeeth's Institute of Management and Information
              Technology
            </p>
            <p>CGPA : 8.58</p>

            <div className="edu-row">
              <h4>Bachelor of Science (BSc) Information Technology</h4>
              <span className="edu-year">2020 - 2023</span>
            </div>
            <p>B.N. Bandodkar College of Science, Thane</p>
            <p>CGPA : 8.40</p>
          </div>
        </section>
        <section className="resume-section">
          <h3>Skills</h3>
          <div className="skill-tags">
            <span>Java</span>
            <span>C++</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Postgre SQL</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Git</span>
          </div>
        </section>

        <section className="resume-section">
          <h3>Projects</h3>

          <div className="project">
            <h4>AI Resume Builder</h4>
            <p>
              Developed a full-stack AI-powered resume builder using Next.js and
              Node.js, enabling real-time resume creation and customization.
              Managed dynamic resume data and live previews using Zustand for
              efficient state management. Integrated the Gemini API for
              automated, high-quality resume content generation. Implemented
              Prisma ORM with PostgreSQL for secure user, resume, and
              subscription data management. Added Stripe-based subscription
              payments with secure backend APIs. Enabled secure resume storage,
              retrieval, and export using Vercel Blob, allowing users to save,
              update, and download professional resumes seamlessly.
            </p>
            <p className="tech">
              Next.js, Node.js, PostgreSQL, Stripe, Gemini 2.0 Flash api
            </p>
          </div>

          <div className="project">
            <h4>BrandFluence</h4>
            <p>
              Built a MERN-based platform connecting brands and influencers to
              streamline collaborations. Implemented JWT-based authentication
              and authorization. Developed influencer discovery features with
              advanced filtering and search. Enabled real-time profile and
              campaign management.
            </p>
            <p className="tech">MERN Stack</p>
          </div>

          <div className="project">
            <h4>Python-based Web Vulnerability Scanner</h4>
            <p>
              Built a Python-based web vulnerability scanner with an automated
              crawler to analyze websites and detect common security issues such
              as XSS, SQL Injection, Directory Traversal, CSRF, and CORS
              misconfigurations. Provided both a command-line interface and a
              simple web GUI for flexible and user-friendly security testing.
            </p>
            <p className="tech">React.js,Python, Web Crawling, Web Security</p>
          </div>

          <div className="project">
            <h4>AI Chatbot</h4>
            <p>
              Built a web-based AI chatbot using React integrated with Google
              Gemini Flash 2.0 API. Implemented prompt handling and response
              rendering for real-time AI interaction. Gained hands-on experience
              with REST APIs and frontend state management.
            </p>
            <p className="tech">React.js, gemini flash 2.0 api</p>
          </div>
        </section>

        <section className="resume-section">
          <h3>Certifications</h3>
          <ul>
            <li>Programming in JAVA - NPTEL</li>
            <li>Cloud Computing - NPTEL</li>
          </ul>
        </section>
      </div>
    </>
  );
}
