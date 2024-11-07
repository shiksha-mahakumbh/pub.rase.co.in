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
    <div>
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


// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>DHE Publications</title>
      </Head>
      <div className="bg-orange-50 text-gray-800">
        <div className="container mx-auto px-4">
          {/* Add margin or padding to bring the navbar down from the top */}
          <header className="relative flex items-center py-4 mt-6 border-b border-gray-300 mb-8"> {/* Added `mt-6` for margin-top */}
            <div className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={100} height={100} className="object-contain" />
              <div className="ml-4 text-2xl font-bold text-orange-600">DHE Publications</div>
            </div>
            <nav className="ml-auto">
              <div className="relative">
                <div className="flex items-center space-x-4">
                  <ul className={`md:flex md:space-x-4 items-center ${isMenuOpen ? 'flex flex-col bg-orange-600 text-white p-4 space-y-4 absolute top-16 left-0 w-full z-10' : 'hidden'}`}>
                  <li>
                      <Link href="https://pub.rase.co.in" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="https://pub.rase.co.in/about-us" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="https://pub.rase.co.in/help" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">
                        Help
                      </Link>
                    </li>
                    <li>
                      <Link href="https://pub.rase.co.in/contact-support" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">
                        Contact and Support
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <CompanyInfo />
                    </li>
                  </ul>
                  <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                  </button>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
