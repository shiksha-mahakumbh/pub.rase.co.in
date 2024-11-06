"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import NavBar from "./NavBar";
import Notification from "./Notification";
import Image from "next/image";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (  
    <div className="bg-white p-4">
      <header className="py-2 bg-white text-white text-center">
        <div className="mx-4">
          <input 
            value={searchQuery} 
            onChange={handleSearchChange} 
            placeholder="Search Here"
            style={{
              height: '40px', 
              width: '300px', 
              borderRadius: '9px', 
              backgroundColor: 'rgba(255, 165, 0, 0.1)',  
              color: 'black'
            }}
            title="Search bar"
          /> 
        </div>
      </header>
      <div className="relative">
        <Image
          src="/vbe.png"
          alt="Viksit Bharat Logo"
          className="hidden md:block rounded-lg w-1/12 h-30 first-letter:object-cover object-center mb-100% absolute transform -translate-y-1/2"
          width={500}
          height={200}
        />
        <Navigation
          imageUrl=""
          title="Viksit Bharat"
          description="This is a sample description."
        />
      </div>
      <div className="w-full">
        {/* This will render the NavBar and it will always be visible */}
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
