'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/vbe_Component/Footer';
import Header from '../../component/vbe_Component/Header';
import CompanyInfo from '../../component/vbe_Component/CompanyInfo';
import Navigation from '../../component/vbe_Component/Navigation';
import About from '../../component/vbe_Component/About';
import CookiesProvider from '../../component/vbe_Component/context';

export default function Vbe() {
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
