"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CompanyInfo from '../component/CompanyInfo';

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>About Us - DHE Publications</title>
      </Head>
      <div className="min-h-screen bg-orange-50 text-gray-800 pt-16">
        <div className="container mx-auto px-4">
          <header className="relative flex items-center py-4 border-b pt-10 mb-8">
            <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 px-4">
              <Image src="/logo.png" alt="Logo" width={100} height={100} className="object-contain" />
            </div>
            <div className="flex-1 ml-28">
              <div className="text-2xl font-bold text-orange-600">DHE Publications</div>
            </div>
            <nav className="flex-1">
              <div className="relative">
                <div className="flex justify-end items-center space-x-4 md:space-x-0">
                  <ul className={`md:flex md:space-x-4 items-center ${isMenuOpen ? 'flex flex-col bg-orange-600 text-white p-4 space-y-4 absolute top-16 left-0 w-full z-10' : 'hidden'}`}>
                    <li>
                      <a href="/" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">Home</a>
                    </li>
                    <li>
                      <a href="AboutUs" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">About Us</a>
                    </li>
                    
                    <li>
                      <a href="/ContactUs" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">Contact and Support</a>
                    </li>
                  </ul>
                  <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                  </button>
                </div>
              </div>
            </nav>
          </header>

          <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <FontAwesomeIcon icon={faInfoCircle} className="text-gray-600 text-6xl" />
                </div>
                <div>
                  <h2 className="text-4xl font-semibold text-gray-800">About Us</h2>
                  <p className="text-gray-600 mt-4 text-xl">
                    DHE Publications is dedicated to advancing knowledge through high-quality publishing. Our mission is to promote scholarly communication and contribute to the global academic community.
                  </p>
                  <p className="text-gray-600 mt-4 text-xl">
                    We believe in the power of education and are committed to providing resources that support learning and research across various disciplines.
                  </p>
                  <p className="text-gray-600 mt-4 text-xl">
                    For more information, please contact us at:
                    <br />
                    <a href="mailto:pub.dhe4@gmail.com" className="text-blue-500 hover:underline">pub.dhe4@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
