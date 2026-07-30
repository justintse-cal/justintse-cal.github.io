import React from 'react';
import { FileText } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed-bar top-bar" data-testid="top-bar">
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
      >
        <FileText size={16} />
        <span>Resume</span>
      </a>
    </header>
  );
}
