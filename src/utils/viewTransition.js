/**
 * View Transition Helper
 * Manages view state changes between 'landing', 'themes', and 'projects'.
 */

export const VIEWS = {
  LANDING: 'landing',
  THEMES: 'themes',
  PROJECTS: 'projects'
};

export const THEMES = [
  'Design',
  'Research',
  'Applications'
];

/**
 * Calculates the next view state based on current view and scroll/swipe direction.
 *
 * @param {'landing' | 'themes' | 'projects'} currentView - Current active view
 * @param {'down' | 'up'} direction - Scroll/swipe direction
 * @returns {'landing' | 'themes' | 'projects'} Next view state
 */
export function getNextView(currentView, direction) {
  if (direction === 'down') {
    if (currentView === VIEWS.LANDING) return VIEWS.THEMES;
    return currentView;
  }
  if (direction === 'up') {
    if (currentView === VIEWS.PROJECTS) return VIEWS.THEMES;
    if (currentView === VIEWS.THEMES) return VIEWS.LANDING;
    return currentView;
  }
  return currentView;
}
