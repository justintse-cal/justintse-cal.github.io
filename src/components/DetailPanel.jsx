import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { filterExistingLinks } from '../data/projects';

export default function DetailPanel({ project }) {
  const [currentImgIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when selected project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  if (!project) {
    return (
      <div className="detail-panel" data-testid="detail-panel">
        <div className="detail-content-wrapper">
          <p className="detail-description">No project selected in this theme.</p>
        </div>
      </div>
    );
  }

  const linksList = filterExistingLinks(project.links);
  const rawPhotos = project.images && project.images.length > 0 ? project.images : [project.image];
  const photos = rawPhotos.map((url) => (url.startsWith('public/') ? url.replace('public/', '/') : url));

  const safeImgIndex = currentImgIndex < photos.length ? currentImgIndex : 0;
  const currentPhoto = photos[safeImgIndex];

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <article className="detail-panel" data-testid="detail-panel">
      {/* Display Image Carousel with Left and Right Navigation Arrows inside parent container */}
      <div className="detail-image-wrapper" data-testid="detail-photo-grid">
        <div className="detail-carousel-container">
          {photos.length > 1 && (
            <button
              type="button"
              className="carousel-arrow-btn carousel-arrow-left"
              onClick={handlePrev}
              aria-label="Previous image"
              data-testid="carousel-prev-btn"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div className="detail-image-carousel" data-testid="detail-image-carousel">
            <img
              src={currentPhoto}
              alt={`${project.title} — photo ${safeImgIndex + 1}`}
              className="detail-carousel-img"
              loading="eager"
              decoding="async"
            />

            {photos.length > 1 && (
              <div className="carousel-pagination-dots" data-testid="carousel-dots">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`carousel-dot ${idx === safeImgIndex ? 'active-dot' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {photos.length > 1 && (
            <button
              type="button"
              className="carousel-arrow-btn carousel-arrow-right"
              onClick={handleNext}
              aria-label="Next image"
              data-testid="carousel-next-btn"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="detail-content-wrapper">
        <h2 className="detail-title">{project.title}</h2>

        {linksList.length > 0 && (
          <div className="pills-row" data-testid="pills-row">
            {linksList.map(({ key, label, url }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-pill"
                data-testid={`link-pill-${key}`}
              >
                <span>{label}</span>
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        )}

        <p className="detail-description">{project.description}</p>
      </div>
    </article>
  );
}
