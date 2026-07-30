import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LandingSection from '../components/LandingSection';

describe('LandingSection Component', () => {
  it('renders landing summary and horizontal carousel block', () => {
    render(<LandingSection isActive={true} onExploreClick={vi.fn()} />);

    expect(screen.getByTestId('landing-section')).toBeInTheDocument();
    expect(screen.getByTestId('landing-carousel-block')).toBeInTheDocument();
    
    // Check that project icons exist in the marquee
    const projectIcons = screen.getAllByRole('img');
    expect(projectIcons.length).toBeGreaterThan(5);
  });

  it('triggers onExploreClick when scroll hint button is clicked', () => {
    const handleExplore = vi.fn();
    render(<LandingSection isActive={true} onExploreClick={handleExplore} />);

    const scrollBtn = screen.getByRole('button', { name: /navigate to projects section/i });
    fireEvent.click(scrollBtn);

    expect(handleExplore).toHaveBeenCalledTimes(1);
  });
});
