import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaUsers, FaPlusCircle, FaList } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gradient-primary text-gray-800 h-screen w-64 fixed flex flex-col shadow-hard">
      <div className="p-4 text-2xl font-bold text-gray-900 shadow-sm">
  Student Tracker
</div>

      <nav className="flex-grow">
        <ul className="space-y-4 p-4">
          <li>
            <Link to="/dashboard" className="flex items-center space-x-2 text-gray-800 hover:bg-accent-light hover:text-gray-900 p-2 rounded">
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/students" className="flex items-center space-x-2 text-gray-800 hover:bg-accent-light hover:text-gray-900 p-2 rounded">
              <FaUsers />
              <span>Students</span>
            </Link>
          </li>
          <li>
            <Link to="/add-student" className="flex items-center space-x-2 text-gray-800 hover:bg-accent-light hover:text-gray-900 p-2 rounded">
              <FaPlusCircle />
              <span>Add Student</span>
            </Link>
          </li>
          <li>
            <Link to="/incidents" className="flex items-center space-x-2 text-gray-800 hover:bg-accent-light hover:text-gray-900 p-2 rounded">
              <FaList />
              <span>Incidents</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
