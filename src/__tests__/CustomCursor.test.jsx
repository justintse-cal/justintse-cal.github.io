import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CustomCursor from '../components/CustomCursor';

describe('CustomCursor Component', () => {
  it('renders custom cursor on mouse movement', () => {
    render(<CustomCursor />);

    // Trigger mousemove event
    fireEvent.mouseMove(window, { clientX: 200, clientY: 150 });

    const cursor = screen.getByTestId('custom-cursor');
    expect(cursor).toBeInTheDocument();
    expect(cursor).toHaveStyle({
      transform: 'translate3d(200px, 150px, 0)'
    });
  });
});
