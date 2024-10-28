import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import StudentList from './pages/StudentList.jsx';
import AddStudent from './pages/AddStudent.jsx';
import StudentProfile from './pages/StudentProfile.jsx';
import IncidentList from './pages/IncidentList.jsx';
import EditIncident from './pages/EditIncident.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/students" element={<StudentList />} />
    <Route path="/add-student" element={<AddStudent />} />
    <Route path="/student/:id" element={<StudentProfile />} />
    <Route path="/incidents" element={<IncidentList />} />
    <Route path="/edit-incident/:id" element={<EditIncident />} />
  </Routes>
);

export default AppRoutes;
