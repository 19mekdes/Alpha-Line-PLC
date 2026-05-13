// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('Saved theme:', savedTheme);
    console.log('Prefers dark:', prefersDark);
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      console.log('Dark mode enabled');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      console.log('Light mode enabled');
    }
  }, []);

  const toggleTheme = () => {
    console.log('Toggle clicked, current darkMode:', darkMode);
    
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
      console.log('Switched to light mode');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
      console.log('Switched to dark mode');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 transition-all duration-300 transform ${
            darkMode ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
          }`}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-300 transform ${
            darkMode ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;