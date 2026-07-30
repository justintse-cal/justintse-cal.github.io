import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DetailPanel from '../components/DetailPanel';

describe('DetailPanel Component', () => {
  const mockProjectAllLinks = {
    id: 'test-1',
    title: 'Test Project Alpha',
    description: 'Detailed description of Test Project Alpha.',
    image: '/projects/test1.png',
    images: ['/projects/test1.png', '/projects/test1_b.png'],
    links: {
      report: 'https://example.com/report',
      slides: 'https://example.com/slides',
      website: 'https://example.com/website',
      article: 'https://example.com/article'
    }
  };

  it('renders project title, description, and image carousel with navigation controls', () => {
    render(<DetailPanel project={mockProjectAllLinks} />);

    expect(screen.getByText('Test Project Alpha')).toBeInTheDocument();
    expect(screen.getByText('Detailed description of Test Project Alpha.')).toBeInTheDocument();
    
    const imageCarousel = screen.getByTestId('detail-image-carousel');
    expect(imageCarousel).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/projects/test1.png');

    // Prev and Next navigation arrows exist for multiple images
    const prevBtn = screen.getByTestId('carousel-prev-btn');
    const nextBtn = screen.getByTestId('carousel-next-btn');
    expect(prevBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();

    // Click next button to switch to photo 2
    fireEvent.click(nextBtn);
    const updatedImg = screen.getByRole('img');
    expect(updatedImg).toHaveAttribute('src', '/projects/test1_b.png');
  });

  it('renders exactly 4 link pills when all 4 links are provided', () => {
    render(<DetailPanel project={mockProjectAllLinks} />);

    expect(screen.getByTestId('link-pill-report')).toBeInTheDocument();
    expect(screen.getByTestId('link-pill-slides')).toBeInTheDocument();
    expect(screen.getByTestId('link-pill-website')).toBeInTheDocument();
    expect(screen.getByTestId('link-pill-article')).toBeInTheDocument();

    const pills = screen.getAllByRole('link');
    expect(pills).toHaveLength(4);

    pills.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders only present link pills when a subset of links is provided', () => {
    const mockProjectPartial = {
      id: 'test-2',
      title: 'Test Project Beta',
      description: 'Partial links project.',
      image: '/projects/test2.png',
      images: ['/projects/test2.png'],
      links: {
        report: 'https://example.com/report',
        article: 'https://example.com/article'
      }
    };

    render(<DetailPanel project={mockProjectPartial} />);

    expect(screen.getByTestId('link-pill-report')).toBeInTheDocument();
    expect(screen.getByTestId('link-pill-article')).toBeInTheDocument();
    expect(screen.queryByTestId('link-pill-slides')).not.toBeInTheDocument();
    expect(screen.queryByTestId('link-pill-website')).not.toBeInTheDocument();
  });

  it('renders zero link pills when no links are present', () => {
    const mockProjectNoLinks = {
      id: 'test-3',
      title: 'Test Project Gamma',
      description: 'No links project.',
      image: '/projects/test3.png',
      images: ['/projects/test3.png'],
      links: {}
    };

    render(<DetailPanel project={mockProjectNoLinks} />);

    expect(screen.queryByTestId('pills-row')).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
