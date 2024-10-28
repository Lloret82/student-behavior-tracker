// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

const LayoutWithSidebar = ({ children }) => (
  <div className="flex">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content with Navbar */}
    <div className="flex-1 flex flex-col">
      <Navbar />
      
      {/* Content Area with Top Padding to Avoid Overlap with Navbar */}
      <div className="flex-1 pt-20 p-6 bg-background">
        {children}
      </div>
    </div>
  </div>
);

const App = () => {
  const location = useLocation();
  const showLayout = location.pathname !== '/'; // Hide Sidebar and Navbar on Login Page

  return (
    <div>
      {showLayout ? (
        <LayoutWithSidebar>
          <AppRoutes />
        </LayoutWithSidebar>
      ) : (
        <AppRoutes />
      )}
    </div>
  );
};

export default App;
