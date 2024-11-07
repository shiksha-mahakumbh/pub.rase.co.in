'use client';
import React from 'react'
import Footer from '../../component/vie_Component/Footer';
import Header from '../../component/vie_Component/Header';
import CompanyInfo from '../../component/vie_Component/CompanyInfo';
import Filter from '../../component/vie_Component/Filter';

import ReadArticle from '../../component/vie_Component/ReadArticle';
const page = () => {
  
    
    return (
        <div className="bg-white">
        <CompanyInfo/>
        <Header/>
        <div className= "flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
        <ReadArticle/>
       
        </div>
        <div className="md:w-1/6"></div>
        </div>
        <Footer/>
       </div>
      )
  
}

export default page
