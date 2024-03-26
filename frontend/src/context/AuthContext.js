import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem('petguardUser');
  const initialUser = storedUser ? JSON.parse(storedUser) : null;
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    // Check if user data is stored in localStorage
    const storedUser = localStorage.getItem('petguardUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    // Save user data to localStorage
    localStorage.setItem('petguardUser', JSON.stringify(userData));
  };

  const logout = () => {
    
    setUser(null);
    // Clear user data from localStorage
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('petguardUser');

    // localStorage.removeItem(userData);
  };

  const isAdmin = () => {
    // Check if the user is an admin
    const isAdmin = localStorage.getItem('isAdmin');
    return isAdmin === 'true';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };





