// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSmile, FaFrown, FaStickyNote, FaExclamationCircle, FaSearch, FaUser, FaHome, FaSignOutAlt, FaList } from 'react-icons/fa';

const Sidebar = ({ schoolName }) => (
  <div className="bg-gradient-primary text-white w-64 h-screen p-4">
    <h2 className="text-xl font-bold mb-6">{schoolName || 'Student Tracker'}</h2>
    <div className="space-y-4">
      <Link to="/dashboard" className="flex items-center text-sm space-x-2">
        <FaHome className="text-white" /> <span>Dashboard</span>
      </Link>
      <Link to="/add-incident/positive" className="flex items-center text-sm space-x-2">
        <FaSmile className="text-green-500" /> <span>Positive</span>
      </Link>
      <Link to="/add-incident/negative" className="flex items-center text-sm space-x-2">
        <FaFrown className="text-red-500" /> <span>Negative</span>
      </Link>
      <Link to="/add-incident/note" className="flex items-center text-sm space-x-2">
        <FaStickyNote className="text-yellow-500" /> <span>Note</span>
      </Link>
      <Link to="/add-incident/concern" className="flex items-center text-sm space-x-2">
        <FaExclamationCircle className="text-purple-500" /> <span>Concern</span>
      </Link>
      <Link to="/incidents" className="flex items-center text-sm space-x-2">
        <FaList className="text-purple-500" /> <span>Incident List</span>
      </Link>
      <Link to="/search" className="flex items-center text-sm space-x-2">
        <FaSearch /> <span>Search/Report</span>
      </Link>
      <Link to="/account" className="flex items-center text-sm space-x-2">
        <FaUser /> <span>My Account</span>
      </Link>
      <Link to="/" className="flex items-center text-sm space-x-2">
        <FaSignOutAlt /> <span>Logout</span>
      </Link>
    </div>
  </div>
);

export default Sidebar;
