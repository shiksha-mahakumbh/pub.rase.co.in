'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/Component/Footer';
import Header from '../../component/Component/Header';
import CompanyInfo from '../../component/Component/CompanyInfo';
import Navigation from '../../component/Component/Navigation';
import About from '../../component/Component/About';
import CookiesProvider from '../../component/Component/context';

export default function Vbe() {
  return (
    <CookiesProvider>
      <div className="bg-white flex flex-col items-center">
        {/* Company Info */}
        <div className="w-full max-w-7xl">
          <CompanyInfo />
        </div>

        {/* Header */}
        <div className="w-full max-w-7xl">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl">
          <div className="md:w-1/6"></div>
          <div className="md:w-4/6">
            <About />
          </div>
          <div className="md:w-1/6"></div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-7xl">
          <Footer />
        </div>
      </div>
    </CookiesProvider>
  );
}
