import React from 'react'
import Header from '../../component/vbe_Component/Header';
import CompanyInfo from '../../component/vbe_Component/CompanyInfo';
import Navigation from '../../component/vbe_Component/Navigation';
import Issue from '../../component/vbe_Component/Issue';
import Footer from '../../component/vbe_Component/Footer';

const page = () => {
    return (
        <div className="bg-white">
        <CompanyInfo/>
        <Header/>
        <div className= "flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
        <Issue/>
        </div>
        <div className="md:w-1/6"></div>
        </div>
        <Footer/>
       </div>
      )
}

export default page
