"use client"; // Add this at the top of page.tsx if it's using client-side features

import Footer from '../../component/vie_Component/Footer';
import Header from '../../component/vie_Component/Header';
import CompanyInfo from '../../component/vie_Component/CompanyInfo';
import Filter from '../../component/vie_Component/Filter';

const Page = () => {
  return (
    <div className="bg-white">
      <CompanyInfo />
      <Header />
      <div className="flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
          <Filter />
        </div>
        <div className="md:w-1/6"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
