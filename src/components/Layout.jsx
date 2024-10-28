// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content with Navbar */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Main content area with padding for Navbar */}
        <div className="flex-1 pt-20 p-6 bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
