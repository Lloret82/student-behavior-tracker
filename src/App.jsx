import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

const LayoutWithSidebar = ({ children, schoolName }) => (
  <div className="flex">
    <Sidebar schoolName={schoolName} />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <div className="flex-1 pt-20 p-6 bg-background">{children}</div>
    </div>
  </div>
);

const App = () => {
  const [schoolName, setSchoolName] = useState('');
  const location = useLocation();
  const showLayout = location.pathname !== '/';

  return (
    <div>
      {showLayout ? (
        <LayoutWithSidebar schoolName={schoolName}>
          <AppRoutes setSchoolName={setSchoolName} />
        </LayoutWithSidebar>
      ) : (
        <AppRoutes setSchoolName={setSchoolName} />
      )}
    </div>
  );
};

export default App;
