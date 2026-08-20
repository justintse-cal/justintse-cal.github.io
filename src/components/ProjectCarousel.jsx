import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import { ChevronDown } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/scrollbar';

export default function ProjectCarousel({ projects, activeIndex = 0, onActiveIndexChange }) {
  const swiperRef = useRef(null);

  if (!projects || projects.length === 0) return null;

  // Sync Swiper slide index when activeIndex changes
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (swiper.activeIndex !== activeIndex) {
        swiper.slideTo(activeIndex);
      }
    }
  }, [activeIndex]);

  const swiperKey = projects.map((p) => p.id).join('_');

  return (
    <div className="carousel-wrapper-2d" data-testid="carousel-wrapper">
      <Swiper
        key={swiperKey}
        ref={swiperRef}
        modules={[Scrollbar, Mousewheel]}
        loop={false}
        centeredSlides={false}
        slidesPerView="auto"
        spaceBetween={24}
        breakpoints={{
          320: {
            spaceBetween: 12,
          },
          640: {
            spaceBetween: 16,
          },
          769: {
            spaceBetween: 24,
          },
        }}
        grabCursor={true}
        allowTouchMove={true}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        scrollbar={{
          draggable: true,
          hide: false,
          snapOnRelease: false,
          el: '.custom-swiper-scrollbar',
        }}
        className="projects-swiper-2d"
      >
        {projects.map((proj, idx) => {
          const isActive = idx === activeIndex;
          return (
            <SwiperSlide key={proj.id || idx}>
              <div
                className={`thumbnail-card-2d ${isActive ? 'active-thumbnail' : ''}`}
                data-testid={`thumbnail-card-${idx}`}
                onClick={() => {
                  if (onActiveIndexChange) {
                    onActiveIndexChange(idx);
                  }
                  if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.slideTo(idx);
                  }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (onActiveIndexChange) onActiveIndexChange(idx);
                  }
                }}
              >
                {/* Active Indicator Arrow pointing directly to active project card */}
                <div className={`active-arrow-indicator ${isActive ? 'visible' : ''}`} aria-hidden="true">
                  <ChevronDown size={22} strokeWidth={3} />
                </div>

                {/* Enforced 1:1 Square Thumbnail */}
                <div className="thumbnail-image-box square-box">
                  <img
                    src={proj.image || (proj.images && proj.images[0])}
                    alt={proj.title}
                    className="thumbnail-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="thumbnail-title multiline-title">{proj.shortTitle || proj.title}</span>
              </div>
            </SwiperSlide>
          );
        })}

        {/* Custom Horizontal Scrollbar Container */}
        <div className="custom-swiper-scrollbar swiper-scrollbar" data-testid="carousel-scrollbar" />
      </Swiper>
    </div>
  );
}
