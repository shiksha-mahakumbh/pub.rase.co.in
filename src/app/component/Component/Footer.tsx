// components/Footer.tsx
"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm md:text-base">
          &copy; 2024 Department of Holistic Education. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
