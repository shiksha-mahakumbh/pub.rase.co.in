"use client";
import React, { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CompanyInfo from '../component/CompanyInfo';

const HomePage: React.FC = () => {
  const [selectedArticleLink, setSelectedArticleLink] = useState<string>("");
  const [selectedBookLink, setSelectedBookLink] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Handle change in article dropdown
  const handleArticleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArticleLink(event.target.value);
  };

  // Handle change in book dropdown
  const handleBookSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBookLink(event.target.value);
  };

  // Handle search button click for articles
  const handleArticleSearchClick = () => {
    if (selectedArticleLink) {
      window.location.href = selectedArticleLink;
    }
  };

  // Handle search button click for books
  const handleBookSearchClick = () => {
    if (selectedBookLink) {
      window.location.href = selectedBookLink;
    }
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>DHE Publications</title>
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
                      <a href="/AboutUs" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">About Us</a>
                    </li>
                    
                    <li>
                      <a href="/ContactUs" className="text-black hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">Contact and Support</a>
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
          <section className="mt-8 max-w-2xl mx-auto px-4 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">Find Journals</h3>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
                  onChange={handleArticleSelectChange}
                >
                  <option value="" disabled selected>
                    Search for journals
                  </option>
                  <option value="/vie">Viksit India English</option>
                  <option value="/vih">Viksit India Hindi</option>
                  <option value="/vbe">Viksit Bharat English</option>
                  <option value="/vbh">Viksit Bharat Hindi</option>
                </select>
                <button className="w-full p-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-600 mt-2" onClick={handleArticleSearchClick}>
                  Search Journals
                </button>
              </div>

              <div className="flex items-center justify-center text-gray-800">
                <span className="mx-4">or</span>
              </div>

              <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">Find Books</h3>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
                  onChange={handleBookSelectChange}
                >
                  <option value="" disabled selected>
                    Search for books
                  </option>
                  <option value="/b/rase20231.pdf">Recent Advances in School Education</option>
                  <option value="/b/rase20232.pdf">Role of Academic-Driven Startups in Developing Economy </option>
                  <option value="/b/sm.pdf">Shiksha Mahakumbh</option>
                  <option value="/Books">Role of Academic Driven Startups in Economy of Jammu & Kashmir</option>
                </select>
                <button className="w-full p-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-600 mt-2" onClick={handleBookSearchClick}>
                  Search Books
                </button>
              </div>
            </div>
          </section>

          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Explore STEM , Social Science, etc., in DHE Publications</h2>
            <ul className="mt-4 text-gray-600 flex flex-wrap justify-center space-x-6 space-y-0">
              <li className="hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">Physical Sciences and Engineering</li>
              <li className="hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">Life Sciences</li>
              <li className="hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">Health Sciences</li>
              <li className="hover:underline hover:text-orange-600 transition duration-300 cursor-pointer">Social Sciences and Humanities</li>
            </ul>
          </section>

          <section className="mt-8 mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">All Articles In DHE Publications Are Open Access</h2>
            <p className="text-gray-600 mt-2 mx-auto max-w-3xl mb-4">
              Articles published on open access are peer-reviewed and made freely available for everyone to read, download, and reuse in line with the user license displayed on the article.
            </p>
            <div className="mx-auto max-w-3xl grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <a href="/AllArticle" className="block p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg font-semibold text-orange-600">View the list of full open access journals and books</h3>
              </a>
              
              <a href="/AboutUs" className="block p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg font-semibold text-orange-600">Read more about DHE Publications </h3>
              </a>
            </div>
          </section>

          <footer className="bg-white text-gray-800 p-6 shadow-md w-full border-t-2 border-orange-600 mb-6">
            <div className="w-full text-center">
              <ul className="flex flex-wrap justify-center space-x-6 mb-6">
                <li>
                  <a href="#" className="text-gray-800 text-sm hover:underline hover:text-orange-600 flex items-center">
                    Privacy Policy <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 text-sm hover:underline hover:text-orange-600 flex items-center">
                    Terms of Use <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </a>
                </li>
                <li>
                  <a href="/AboutUs" className="text-gray-800 text-sm hover:underline hover:text-orange-600 flex items-center">
                    About DHE <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </a>
                </li>
              </ul>
              <div className="text-sm text-gray-500">&copy; 2024 DHE Publications. All Rights Reserved.</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
