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
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userInfo");

      setIsLoggedIn(false);
      toast.success("Logged out successfully");
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
          className="flex items-center bg-orange-600 rounded-sm p-2 m-2 text-white hover:bg-orange-700 transition"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span className="pl-2">Logout</span>
        </button>
      ) : (
        <Link
          href="/login"
          className="flex items-center bg-orange-600 rounded-sm p-2 text-white hover:bg-orange-700 transition"
        >
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className="pl-2">Login</span>
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
          <header className="relative flex items-center py-4 mt-6 border-b border-gray-300 mb-8">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={100} height={100} className="object-contain" />
              <div className="ml-4 text-2xl font-bold text-orange-600">DHE Publications</div>
            </div>
            <nav className="ml-auto">
              <div className="relative">
                <div className="flex items-center space-x-4">
                  <ul
                    className={`md:flex md:space-x-4 items-center ${
                      isMenuOpen ? "flex flex-col bg-orange-600 text-white p-4 space-y-4 absolute top-16 left-0 w-full z-10" : "hidden"
                    }`}
                  >
                    <li>
                      <Link href="https://pub.rase.co.in" className="hover:underline hover:text-orange-400 transition duration-300">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="https://pub.rase.co.in/about-us" className="hover:underline hover:text-orange-400 transition duration-300">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="https://pub.rase.co.in/help" className="hover:underline hover:text-orange-400 transition duration-300">
                        Help
                      </Link>
                    </li>
                    <li>
                      <Link href="https://pub.rase.co.in/contact-support" className="hover:underline hover:text-orange-400 transition duration-300">
                        Contact and Support
                      </Link>
                    </li>
                    <li>
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
