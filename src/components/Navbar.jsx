// src/components/Navbar.jsx
import React from 'react';
import { FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };

  return (
    <nav className="bg-gradient-nav text-gray-800 p-4 shadow-md fixed top-0 left-64 w-[calc(100%-16rem)] z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Application Name */}
        <div className="text-lg font-bold">
          Student Tracker
        </div>

        {/* Right: Icons and Logout */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button className="relative text-white hover:text-gray-300 focus:outline-none">
            <FaBell size={24} />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center shadow-md">
              3
            </span>
          </button>

          {/* Profile Icon */}
          <button className="text-white hover:text-gray-300 focus:outline-none">
            <FaUserCircle size={28} />
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-1 text-red-300 hover:text-red-500 focus:outline-none"
          >
            <FaSignOutAlt size={20} />
            <span className="text-sm font-semibold">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
