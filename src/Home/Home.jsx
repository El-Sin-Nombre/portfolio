import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";
import profile from "../assets/shree.png";

export function Home(){
  return(
    <>
      <Header />
      <section className="hero">
        <div className="hero-left">
          <h1>
            Hi <br />
            I’m <span>SHRIJAY MORE</span>
          </h1>
          <h2>Web Developer</h2>
          <p>
            I design and build modern, scalable web applications with
            a strong focus on clean and simple UI and user experience.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="primary-btn">Contact Me</Link>
            <Link to="/projects" className="secondary-btn">Projects</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-wrapper">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </section>
    </>
  );
}
