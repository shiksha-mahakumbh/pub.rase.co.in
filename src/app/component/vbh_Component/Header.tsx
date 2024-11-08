"use client";
import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import NavBar from "./NavBar";
import Image from "next/image";

const Header = () => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="bg-white p-4">
      <header className="py-2 bg-white text-white text-center">
        <div className="mx-4">
          <input
            value={searchQuery}
            onChange={event => setSearchQuery(event.currentTarget.value)}
            placeholder="   यहाँ खोजें"
            style={{
              height: '40px',
              width: '300px',
              borderRadius: "9px",
              backgroundColor: "rgba(255, 165, 0, 0.1)",
              color: "black"
            }}
            title='खोज पट्टी'
          />
        </div>
      </header>
      <div className="relative">
        <Image
          src="/vbh.png"
          alt="fg"
          className="hidden md:block rounded-lg w-1/12 h-25 object-cover object-center mb-50% absolute transform -translate-y-1/2"
          width={500}
          height={500}
        />
        <Navigation
          imageUrl=""
          title="विकसित भारत"
          description="यह एक विवरण है।"
        />
      </div>
      <div className="w-full">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
