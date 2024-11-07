"use client";
import React, { useState } from "react";

const AlphabetList = () => {
  const alphabet = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // An array of alphabet letters
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    // You can perform some action here when a letter is clicked.
  };

  return (
    <div className="alphabet-list bg-white">
      <ul>
        {alphabet.map((letter, index) => (
          <li
            key={index}
            className={`alphabet-item cursor-pointer px-2 py-1 transition duration-300 ${
              selectedLetter === letter
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200 hover:text-primary"
            }`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlphabetList;
