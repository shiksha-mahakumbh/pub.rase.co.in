'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/vih_Component/Footer';
import Header from '../../component/vih_Component/Header';
import CompanyInfo from '../../component/vih_Component/CompanyInfo';
import Navigation from '../../component/vih_Component/Navigation';
import About from '../../component/vih_Component/About';
import CookiesProvider from '../../component/vih_Component/context';

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
