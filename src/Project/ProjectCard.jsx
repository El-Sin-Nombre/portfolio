import { useEffect, useState } from "react";
import githubLogo from "../assets/github.png";

export function ProjectCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fade, setFade] = useState(true);

  const totalImages = project.images.length;

  const changeSlide = (direction) => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % totalImages;
        }
        if (direction === "prev") {
          return (prev - 1 + totalImages) % totalImages;
        }
        return prev;
      });
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      changeSlide("next");
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);


  return (
    <div className="portfolio-container">
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="action-buttons">
          <a href={project.github} target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="GitHub" className="github-icon" />
          </a>

          {/* Previous */}
          <button onClick={() => changeSlide("prev")}>⏮</button>

          {/* Pause / Resume */}
          <button onClick={() => setPaused(!paused)}>
            {paused ? "Resume" : "Pause"}
          </button>

          {/* Next */}
          <button onClick={() => changeSlide("next")}>⏭</button>
        </div>
      </div>

      <div className="slideshow">
        <img
          src={project.images[currentIndex]}
          alt={`${project.title} screenshot`}
          className={fade ? "fade-in" : "fade-out"}
        />
      </div>
    </div>
  );
}
