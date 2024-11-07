'use client';
import React from 'react'
import Footer from '../../component/vbe_Component/Footer';
import Header from '../../component/vbe_Component/Header';
import CompanyInfo from '../../component/vbe_Component/CompanyInfo';
import ContactUs from '../../component/vbe_Component/ContactUs';


const page = () => {
  
    
    return (
        <div className="bg-white">
        <CompanyInfo/>
        <Header/>
        <div className= "flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
        <ContactUs/>
       
        </div>
        <div className="md:w-1/6"></div>
        </div>
        <Footer/>
       </div>
      )
  
}

export default page
