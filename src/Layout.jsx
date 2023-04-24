import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
const Layout = () => {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const handleDarkMode = () => {
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="bg-white dark:bg-Very-Dark-Blue">
      <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <Outlet />
    </div>
  );
};

export default Layout;
