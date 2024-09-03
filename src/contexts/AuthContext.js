
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    
  const login = async (username, password) => {
    try {
      const response = await axios.post('https://role-based-report-101.onrender.com/api/auth/login', { username, password });
      const userData = response.data.user;
      // Ensure that the role is properly handled, even if it's just a string
      setUser({ 
        ...userData, 
        role: userData.role?.name || userData.role || 'Unknown'
      });
      localStorage.setItem('token', response.data.token);
      return userData; // Return user data for additional handling if needed
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('https://role-based-report-101.onrender.com/api/auth/me', { 
        headers: { Authorization: `Bearer ${token}` } 
      })
        .then(response => {
          const userData = response.data.user;
          setUser({ 
            ...userData, 
            role: userData.role?.name || userData.role || 'Unknown'
          });
        })
        .catch(() => logout());
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};