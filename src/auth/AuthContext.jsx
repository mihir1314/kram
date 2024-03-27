// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData, userType) => {
    if (userType === 'admin') {
      // Admin login logic
      const { email, password } = userData;
  
      try {
        const response = await fetch('http://localhost:8081/admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Admin logged in successfully');
          setUser({ ...userData, userType });
        } else {
          console.error('Invalid email or password');
          throw new Error('Invalid email or password');
        }
      } catch (error) {
        console.error('Admin login failed:', error.message);
        // Handle login error if needed
      }
    }  else if (userType === 'customer') {
      // Customer login logic
    } else if (userType === 'delivery_man') {
      // Delivery man login logic
    }else {
      console.error('Invalid user type');
      // Handle invalid user type if needed
    }

    setUser({ ...userData, userType });
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
