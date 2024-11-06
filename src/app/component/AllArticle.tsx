"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head";

// Example data for articles
const articles = [
  { name: "React Basics", website: "Viksit Bharat English", category: "Technology" },
  { name: "Understanding AI", website: "Viksit Bharat Hindi", category: "Science" },
  { name: "Economics 101", website: "Viksit India English", category: "Economics" },
  { name: "Climate Change", website: "Viksit India Hindi", category: "Environment" },
  { name: "JavaScript Deep Dive", website: "Viksit Bharat English", category: "Technology" },
];

const ArticleListPage: React.FC = () => {
  const [sortedArticles, setSortedArticles] = useState(articles);
  const [filters, setFilters] = useState({
    name: "",
    website: "",
    category: "",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle sorting articles alphabetically
  useEffect(() => {
    const sorted = [...articles].sort((a, b) => a.name.localeCompare(b.name));
    setSortedArticles(sorted);
  }, []);

  // Function to handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Apply filters to articles
  const filteredArticles = sortedArticles.filter((article) => {
    const nameMatches = article.name.toLowerCase().includes(filters.name.toLowerCase());
    const websiteMatches = !filters.website || article.website === filters.website;
    const categoryMatches = !filters.category || article.category === filters.category;
    return nameMatches && websiteMatches && categoryMatches;
  });

  return (
    <>
      <Head>
        <title>DHE Publications</title>
      </Head>
      <div className="min-h-screen bg-orange-50 text-gray-800 pt-16">
        <div className="container mx-auto px-4">
          {/* Header */}
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
                      <a href="/AboutUs" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">About Us</a>
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

          {/* Sidebar and Content */}
          <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4 w-full bg-white p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Filter Articles</h2>

              {/* Filter by Name */}
              <label className="block mb-4">
                <span className="text-gray-700">Article Name:</span>
                <input
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full p-2 border rounded"
                  placeholder="Search by name"
                />
              </label>

              {/* Filter by Website */}
              <label className="block mb-4">
                <span className="text-gray-700">Website:</span>
                <select
                  name="website"
                  value={filters.website}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full p-2 border rounded"
                >
                  <option value="">All Websites</option>
                  <option value="Viksit Bharat English">Viksit Bharat English</option>
                  <option value="Viksit Bharat Hindi">Viksit Bharat Hindi</option>
                  <option value="Viksit India English">Viksit India English</option>
                  <option value="Viksit India Hindi">Viksit India Hindi</option>
                </select>
              </label>

              {/* Filter by Category */}
              <label className="block mb-4">
                <span className="text-gray-700">Category:</span>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full p-2 border rounded"
                >
                  <option value="">All Categories</option>
                  <option value="Technology">Technology</option>
                  <option value="Science">Science</option>
                  <option value="Economics">Economics</option>
                  <option value="Environment">Environment</option>
                </select>
              </label>
            </div>

            {/* Articles List */}
            <div className="lg:w-3/4 w-full p-6">
              <h2 className="text-2xl font-bold mb-6">Articles</h2>
              {filteredArticles.length > 0 ? (
                <ul className="space-y-4">
                  {filteredArticles.map((article, index) => (
                    <li
                      key={index}
                      className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-xl font-semibold">{article.name}</h3>
                        <p className="text-gray-600">{article.website} - {article.category}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No articles found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleListPage;
