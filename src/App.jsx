import React, { useState, useEffect, useRef, useCallback } from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import LandingSection from './components/LandingSection';
import ThemeSelectionSection from './components/ThemeSelectionSection';
import ProjectsSection from './components/ProjectsSection';
import CustomCursor from './components/CustomCursor';
import { VIEWS, getNextView } from './utils/viewTransition';

export default function App() {
  const [currentView, setCurrentView] = useState(VIEWS.LANDING);
  const [selectedTheme, setSelectedTheme] = useState('Design');
  
  const isTransitioningRef = useRef(false);
  const touchStartYRef = useRef(0);

  const changeView = useCallback((nextView) => {
    if (nextView === currentView || isTransitioningRef.current) return;
    
    isTransitioningRef.current = true;
    setCurrentView(nextView);

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 500);
  }, [currentView]);

  const handleSelectTheme = (themeName) => {
    setSelectedTheme(themeName);
    changeView(VIEWS.PROJECTS);
  };

  useEffect(() => {
    // Helper to check if view section can switch or should scroll internally
    const canTransitionView = (direction) => {
      const activeSection = document.querySelector('.view-active');
      if (!activeSection) return true;

      const isScrollable = activeSection.scrollHeight > activeSection.clientHeight + 8;
      if (!isScrollable) return true;

      const { scrollTop, clientHeight, scrollHeight } = activeSection;
      const isAtTop = scrollTop <= 8;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 8;

      if (direction === 'down') return isAtBottom;
      if (direction === 'up') return isAtTop;
      return true;
    };

    // Wheel event handler
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 15) return;
      const direction = e.deltaY > 0 ? 'down' : 'up';
      if (!canTransitionView(direction)) return;
      const nextView = getNextView(currentView, direction);
      changeView(nextView);
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;

      if (Math.abs(deltaY) < 35) return;
      const direction = deltaY > 0 ? 'down' : 'up';
      if (!canTransitionView(direction)) return;
      const nextView = getNextView(currentView, direction);
      changeView(nextView);
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'Space'].includes(e.key)) {
        if (!canTransitionView('down')) return;
        if (currentView === VIEWS.LANDING) changeView(VIEWS.THEMES);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        if (!canTransitionView('up')) return;
        if (currentView === VIEWS.PROJECTS) changeView(VIEWS.THEMES);
        else if (currentView === VIEWS.THEMES) changeView(VIEWS.LANDING);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentView, changeView]);

  // Dynamic Background Gradient Class
  const bgGradientClass = currentView === VIEWS.THEMES ? 'bg-sharp-gradient' : 'bg-animated-gradient';

  return (
    <>
      <CustomCursor />
      <TopBar hidden={currentView === VIEWS.PROJECTS} />
      <main className={`main-view ${bgGradientClass}`} data-testid="main-view">
        <LandingSection
          isActive={currentView === VIEWS.LANDING}
          onExploreClick={() => changeView(VIEWS.THEMES)}
        />
        <ThemeSelectionSection
          isActive={currentView === VIEWS.THEMES}
          onSelectTheme={handleSelectTheme}
        />
        <ProjectsSection
          isActive={currentView === VIEWS.PROJECTS}
          selectedTheme={selectedTheme}
          onBackToThemes={() => changeView(VIEWS.THEMES)}
        />
      </main>
      <BottomBar hidden={currentView === VIEWS.PROJECTS} />
    </>
  );
}
