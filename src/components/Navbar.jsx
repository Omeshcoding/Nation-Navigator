import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex justify-between px-14 py-6 bg-light-gray drop-shadow-lg">
      <Link to="/" className="text-Dark-Blue font-bold text-2xl">
        Nation Navigator
      </Link>
      <button className="flex items-center gap-2 text-Very-Dark-Blue">
        <BsMoon /> Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
