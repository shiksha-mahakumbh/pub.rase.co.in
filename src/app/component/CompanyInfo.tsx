"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSignInAlt, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";

// CompanyInfo Component for login/logout functionality
const CompanyInfo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token'); // Get token from local storage
    setIsLoggedIn(!!token); // Set isLoggedIn based on token presence
  };

  useEffect(() => {
    checkLoginStatus(); // Check login status when component mounts
  }, []);

  const handleLogout = () => {
    try {
      // Clear token and user information from local storage
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userInfo');

      // Force re-render by directly setting isLoggedIn
      setIsLoggedIn(false);

      // Provide feedback to the user
      toast.success("Logged out successfully");

      // Redirect to login page
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed");
      console.error("Error during logout", error);
    }
  };

  return (
    <div className="flex items-center">
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="flex items-center bg-primary rounded-sm p-2 m-2 justify-center text-orange hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span className="ps-2">Logout</span>
        </button>
      ) : (
        <Link href="/login" className="flex items-center bg-primary rounded-sm p-2 justify-center text-orange hover:cursor-pointer">
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className="ps-2">Login</span>
        </Link>
      )}
    </div>
  );
};



export default CompanyInfo;
