'use client';
import React from 'react'
import Footer from '../../component/vbh_Component/Footer';
import Header from '../../component/vbh_Component/Header';
import CompanyInfo from '../../component/vbh_Component/CompanyInfo';
import Filter from '../../component/vbh_Component/Filter';

import Paper3 from '../../component/vbh_Component/Paper3';
const page = () => {
  
    
    return (
        <div className="bg-white">
        <CompanyInfo/>
        <Header/>
        <div className= "flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
        <Paper3/>
       
        </div>
        <div className="md:w-1/6"></div>
        </div>
        <Footer/>
       </div>
      )
  
}

export default page
