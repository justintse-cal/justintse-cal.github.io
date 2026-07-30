import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function BottomBar() {
  return (
    <footer className="fixed-bar bottom-bar" data-testid="bottom-bar">
      <div className="contact-group">
        <a
          href="https://www.linkedin.com/in/tsejustin/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
          aria-label="LinkedIn Profile"
          data-testid="linkedin-link"
        >
          <Linkedin size={18} />
        </a>

        <a
          href="https://github.com/justintse-cal"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
          aria-label="GitHub Profile"
          data-testid="github-link"
        >
          <Github size={18} />
        </a>

        <a
          href="mailto:tsejustin0505@gmail.com"
          className="icon-btn"
          aria-label="Email Contact"
          data-testid="email-link"
        >
          <Mail size={18} />
        </a>
      </div>

      {/* Visitor Counter Empty Container Reserved for mapmyvisitors widget */}
      <div
        id="visitor-counter-container"
        className="visitor-counter-container"
        data-testid="visitor-counter-container"
      />
    </footer>
  );
}
