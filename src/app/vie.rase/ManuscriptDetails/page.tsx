"use client";

import React, { useState, useEffect } from 'react';
import ManuscriptDetailsComponent from '../../component/vie_Component/ManuscriptDetails'; // Path to the ManuscriptDetails component
import Login from '../../component/vie_Component/Login'; // Path to the Login component
import CompanyInfo from '../../component/vie_Component/CompanyInfo'; // Path to the CompanyInfo component
import Header from '../../component/vie_Component/Header';
const ManuscriptDetailsPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check login status from local storage
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false); // Stop showing the loading state after checking login status
    };

    checkAuthStatus();
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Replace with actual login logic
    const mockToken = 'mock-auth-token'; // Replace with actual token from login API

    if (email && password) {
      localStorage.setItem('authToken', mockToken);
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <CompanyInfo /> {/* Render CompanyInfo at the top */}
      <Header/>
      <div className="flex items-center justify-center min-h-screen">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : isLoggedIn ? (
          <ManuscriptDetailsComponent />
        ) : (
          <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Please Log in to View Manuscript Details
            </h2>
            <Login onLogin={handleLogin} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManuscriptDetailsPage;
