'use client';

import Footer from '../../component/vbe_Component/Footer';
import Header from '../../component/vbe_Component/Header';
import CompanyInfo from '../../component/vbe_Component/CompanyInfo';
import Navigation from '../../component/vbe_Component/Navigation';
import Editorial from '../../component/vbe_Component/Editorial';

function Issues() {
  return (
    <div className="bg-white">
    <CompanyInfo/>
    <Header/>
    <div className= "flex flex-row">
    <div className="md:w-1/6"></div>
    <div className="md:w-4/6">
    <Editorial/>
    </div>
    <div className="md:w-1/6"></div>
    </div>
    <Footer/>
   </div>
  )
}
export default Issues;