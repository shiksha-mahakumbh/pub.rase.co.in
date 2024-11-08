'use client';
import React from 'react'
import Footer from '../../component/vbh_Component/Footer';
import Header from '../../component/vbh_Component/Header';
import CompanyInfo from '../../component/vbh_Component/CompanyInfo';
import Filter from '../../component/vbh_Component/Filter';
import ReadArticle from '../../component/vbh_Component/ReadArticle';

const Page = () => {
    return (
        <div className="bg-white overflow-x-hidden">
            <CompanyInfo />
            <Header />
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/6"></div>
                <div className="w-full md:w-4/6">
                    <ReadArticle />
                </div>
                <div className="md:w-1/6"></div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
