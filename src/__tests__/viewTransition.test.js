import { describe, it, expect } from 'vitest';
import { VIEWS, getNextView } from '../utils/viewTransition';

describe('viewTransition utility (3-view navigation)', () => {
  it('navigates from landing to themes on down signal', () => {
    expect(getNextView(VIEWS.LANDING, 'down')).toBe(VIEWS.THEMES);
  });

  it('navigates from themes to landing on up signal', () => {
    expect(getNextView(VIEWS.THEMES, 'up')).toBe(VIEWS.LANDING);
  });

  it('navigates from projects to themes on up signal', () => {
    expect(getNextView(VIEWS.PROJECTS, 'up')).toBe(VIEWS.THEMES);
  });

  it('remains on landing view when up signal is given on landing', () => {
    expect(getNextView(VIEWS.LANDING, 'up')).toBe(VIEWS.LANDING);
  });

  it('remains on themes view when down signal is given on themes', () => {
    expect(getNextView(VIEWS.THEMES, 'down')).toBe(VIEWS.THEMES);
  });
});
