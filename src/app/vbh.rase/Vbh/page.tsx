'use client';
import { useState, useEffect } from 'react';
import Footer from '../../component/vbh_Component/Footer';
import Header from '../../component/vbh_Component/Header';
import CompanyInfo from '../../component/vbh_Component/CompanyInfo';
import Navigation from '../../component/vbh_Component/Navigation';
import About from '../../component/vbh_Component/About';
import CookiesProvider from '../../component/vbh_Component/context';

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
