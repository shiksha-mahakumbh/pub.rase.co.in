'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/vie_Component/Footer';
import Header from '../../component/vie_Component/Header';
import CompanyInfo from '../../component/vie_Component/CompanyInfo';
import Navigation from '../../component/vie_Component/Navigation';
import About from '../../component/vie_Component/About';
import CookiesProvider from '../../component/vie_Component/context';

export default function Home() {
  return (
    <CookiesProvider>
   <div className="bg-white">
    <CompanyInfo/>
    <Header/>
    <div className= "flex flex-row">
    <div className="md:w-1/6"></div>
    <div className="md:w-4/6">
    <About/>
    </div>
    <div className="md:w-1/6"></div>
    </div>
    <Footer/>
   </div>
   </CookiesProvider>
  );
}
