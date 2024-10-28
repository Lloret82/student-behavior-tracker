import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear user from localStorage
  };

  const isAuthenticated = () => user !== null;
  const isAdmin = () => user?.role === "admin";
  const isTeacher = () => user?.role === "teacher";
  const isPhaseLeader = () => user?.role === "phase-leader";

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin, isTeacher, isPhaseLeader }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
