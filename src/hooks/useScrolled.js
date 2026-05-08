import { useState, useEffect } from 'react';

/**
 * Custom hook to detect scroll position and direction
 * @param {number} threshold - Scroll threshold in pixels (default: 50)
 * @returns {object} { scrolled, scrolledUp, scrolledDown, scrollY, scrollDirection, isAtTop, isAtBottom }
 */
const useScrolled = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if scrolled past threshold
      setScrolled(currentScrollY > threshold);
      
      // Set current scroll position
      setScrollY(currentScrollY);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Check if at top of page
      setIsAtTop(currentScrollY === 0);
      
      // Check if at bottom of page
      setIsAtBottom(currentScrollY + windowHeight >= documentHeight - 10);
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set initial state
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, lastScrollY]);

  return {
    scrolled,        // boolean - true if scrolled past threshold
    scrolledUp: scrollDirection === 'up',     // boolean - true if scrolling up
    scrolledDown: scrollDirection === 'down', // boolean - true if scrolling down
    scrollY,         // number - current scroll position in pixels
    scrollDirection, // string - 'up' or 'down'
    isAtTop,         // boolean - true if at top of page
    isAtBottom       // boolean - true if at bottom of page
  };
};

export default useScrolled;