import React, { useState, useEffect } from 'react';
import DetailPanel from './DetailPanel';
import ProjectCarousel from './ProjectCarousel';
import { PROJECTS, getProjectsByTheme, getActiveProject } from '../data/projects';
import { ArrowLeft, FileText, Linkedin, Github, Mail } from 'lucide-react';

export default function ProjectsSection({ isActive, selectedTheme, onBackToThemes }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset active slide index when theme changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedTheme]);

  const filteredProjects = getProjectsByTheme(PROJECTS, selectedTheme);
  const safeActiveIndex =
    filteredProjects.length > 0 && activeIndex < filteredProjects.length
      ? activeIndex
      : 0;
  const activeProject = getActiveProject(filteredProjects, safeActiveIndex);
  const transitionClass = isActive ? 'view-active' : 'view-hidden-down';

  return (
    <section
      className={`view-section projects-section ${transitionClass}`}
      data-testid="projects-section"
      aria-hidden={!isActive}
    >
      {/* ROW 1: Full-Width Header Row (Title & Resume Button) */}
      <header className="projects-row-header" data-testid="projects-top-bar">
        <div className="identity-group">
          <span className="identity-name">Justin Tse</span>
          <span className="identity-title">GIS &amp; Research Analyst</span>
        </div>

        <a
          href="/pdf/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          aria-label="Open Resume PDF in new tab"
          tabIndex={isActive ? 0 : -1}
        >
          <FileText size={16} />
          <span>Resume</span>
        </a>
      </header>

      {/* ROW 2: Centered Middle Row (Main Project Page View) */}
      <div className="projects-row-main">
        <div className="projects-header-nav">
          <button
            type="button"
            className="back-to-themes-btn"
            onClick={onBackToThemes}
            data-testid="back-to-themes-btn"
            tabIndex={isActive ? 0 : -1}
          >
            <ArrowLeft size={16} />
            <span>Back to Themes</span>
          </button>
        </div>

        <DetailPanel project={activeProject} />
        <ProjectCarousel
          projects={filteredProjects}
          activeIndex={safeActiveIndex}
          onActiveIndexChange={(newIndex) => setActiveIndex(newIndex)}
        />
      </div>

      {/* ROW 3: Full-Width Footer Row (Social Links) */}
      <footer className="projects-row-footer" data-testid="projects-bottom-bar">
        <div className="contact-group">
          <a
            href="https://www.linkedin.com/in/tsejustin/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn Profile"
            data-testid="projects-linkedin-link"
            tabIndex={isActive ? 0 : -1}
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/justintse-cal"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub Profile"
            data-testid="projects-github-link"
            tabIndex={isActive ? 0 : -1}
          >
            <Github size={18} />
          </a>

          <a
            href="mailto:tsejustin0505@gmail.com"
            className="icon-btn"
            aria-label="Email Contact"
            data-testid="projects-email-link"
            tabIndex={isActive ? 0 : -1}
          >
            <Mail size={18} />
          </a>
        </div>

        <div
          id="visitor-counter-container"
          className="visitor-counter-container"
          data-testid="projects-visitor-counter-container"
        />
      </footer>
    </section>
  );
}
