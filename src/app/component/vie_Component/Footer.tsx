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
    <footer className="bg-orange-500 text-white p-4 text-center"> {/* Updated background color */}
      <div className="container mx-auto">
        <p>
          &copy; 2024 Department of Holistic Education. All rights reserved.
        </p>
        <div className="mt-4 space-x-4 sm:order-1">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="lg" /> {/* Increased icon size */}
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
