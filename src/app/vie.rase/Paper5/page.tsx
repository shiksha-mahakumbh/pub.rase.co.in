'use client';
import React from 'react'
import Footer from '../../component/vie_Component/Footer';
import Header from '../../component/vie_Component/Header';
import CompanyInfo from '../../component/vie_Component/CompanyInfo';
import Filter from '../../component/vie_Component/Filter';

import Paper5 from '../../component/vie_Component/Paper5';
const page = () => {
  
    
    return (
        <div className="bg-white">
        <CompanyInfo/>
        <Header/>
        <div className= "flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
        <Paper5/>
       
        </div>
        <div className="md:w-1/6"></div>
        </div>
        <Footer/>
       </div>
      )
  
}

export default page
