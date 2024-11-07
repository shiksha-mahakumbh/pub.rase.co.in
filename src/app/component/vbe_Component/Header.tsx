"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import NavBar from "./NavBar";
import Image from "next/image";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (  
    <div className="bg-white p-4">
      <header className="py-2 bg-white text-white text-center mb-1"> {/* Adjusted margin-bottom */}
        <div className="mx-4">
          <input 
            value={searchQuery} 
            onChange={(event) => setSearchQuery(event.currentTarget.value)} 
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

      <div className="relative flex items-center">
        <Image
          src="/vbe.png"
          alt="Viksit Bharat Logo"
          className="hidden md:block rounded-lg object-cover object-center"
          width={100}
          height={100}
        />
        
        {/* Adjusted font size and reduced padding for background */}
        <div className="ml-1 w-full bg-orange-500 text-white px-0 py-0 rounded-md" style={{ fontSize: "1.2rem", lineHeight: "0.5rem" }}>
          <Navigation
            imageUrl=""
            title="Viksit Bharat"
            description="This is a sample description."
          />
        </div>
      </div>

      <div className="w-full mt-1"> {/* Reduced top margin */}
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
