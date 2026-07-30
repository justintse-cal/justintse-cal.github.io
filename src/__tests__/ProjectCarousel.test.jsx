import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCarousel from '../components/ProjectCarousel';

describe('ProjectCarousel Component', () => {
  const mockProjects = [
    { id: 'p1', title: 'Project One', image: '/img1.png' },
    { id: 'p2', title: 'Project Two', image: '/img2.png' },
    { id: 'p3', title: 'Project Three', image: '/img3.png' }
  ];

  it('renders carousel wrapper and project items in fixed order', () => {
    render(<ProjectCarousel projects={mockProjects} activeIndex={0} />);

    expect(screen.getByTestId('carousel-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-scrollbar')).toBeInTheDocument();

    mockProjects.forEach((proj, idx) => {
      expect(screen.getByTestId(`thumbnail-card-${idx}`)).toBeInTheDocument();
      expect(screen.getByText(proj.title)).toBeInTheDocument();
    });
  });

  it('highlights the active thumbnail card based on activeIndex', () => {
    const { rerender } = render(<ProjectCarousel projects={mockProjects} activeIndex={0} />);

    let card0 = screen.getByTestId('thumbnail-card-0');
    let card1 = screen.getByTestId('thumbnail-card-1');

    expect(card0).toHaveClass('active-thumbnail');
    expect(card1).not.toHaveClass('active-thumbnail');

    rerender(<ProjectCarousel projects={mockProjects} activeIndex={1} />);

    card0 = screen.getByTestId('thumbnail-card-0');
    card1 = screen.getByTestId('thumbnail-card-1');

    expect(card0).not.toHaveClass('active-thumbnail');
    expect(card1).toHaveClass('active-thumbnail');
  });

  it('calls onActiveIndexChange when a thumbnail card is clicked', () => {
    const handleActiveChange = vi.fn();
    render(
      <ProjectCarousel
        projects={mockProjects}
        activeIndex={0}
        onActiveIndexChange={handleActiveChange}
      />
    );

    fireEvent.click(screen.getByTestId('thumbnail-card-1'));
    expect(handleActiveChange).toHaveBeenCalledWith(1);
  });
});
