'use client';
import React from 'react'
import Footer from '../../component/vih_Component/Footer';
import Header from '../../component/vih_Component/Header';
import CompanyInfo from '../../component/vih_Component/CompanyInfo';
import Filter from '../../component/vih_Component/Filter';

import Paper2 from '../../component/vih_Component/Paper2';
const page = () => {
  
    
    return (
        <div className="bg-white">
        <CompanyInfo/>
        <Header/>
        <div className= "flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
        <Paper2/>
       
        </div>
        <div className="md:w-1/6"></div>
        </div>
        <Footer/>
       </div>
      )
  
}

export default page
