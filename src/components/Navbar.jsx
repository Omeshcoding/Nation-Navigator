import React, { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Navbar = ({ handleDarkMode, darkMode }) => {
  const [showIcon, setShowIcon] = useState(true);
  return (
    <nav className="flex justify-between px-4 md:px-14 py-6 bg-white text-Very-Dark-Blue dark:bg-dark-blue dark:text-white drop-shadow-lg">
      <Link to="/" className="text-Dark-Blue font-bold text-2xl">
        Nation Navigator
      </Link>
      <button
        className="  transition-all duration-300 ease-out outline-none"
        onClick={handleDarkMode}
      >
        {darkMode === 'dark' ? (
          <span className="text-sm flex items-center gap-2 font-medium">
            <BsMoonFill /> Dark Mode
          </span>
        ) : (
          <span className="text-sm flex items-center gap-2 font-medium">
            <BsSunFill /> Light Mode
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
