import React from 'react';
import { BsMoon } from 'react-icons/bs';
const Navbar = () => {
  return (
    <nav className="flex justify-between px-14 py-6 bg-light-gray drop-shadow-lg">
      <h1 className="text-Dark-Blue font-bold text-2xl">Nation Navigator</h1>
      <button className="flex items-center gap-2 text-Very-Dark-Blue">
        <BsMoon /> Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
