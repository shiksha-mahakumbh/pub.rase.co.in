// src/app/ArticleDetail/[id]/page.tsx
'use client'; // This indicates that this is a client-side component

import React from 'react';
import ArticleDetail from '../../../component/Component/ArticleDetail';
import Footer from '../../../component/Component/Footer';
import Header from '../../../component/Component/Header';
import CompanyInfo from '../../../component/Component/CompanyInfo';
import { useRouter } from 'next/navigation';


interface ArticleDetailPageProps {
    params: {
        id: string;
    };
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ params }) => {
    const { id } = params;

    return (
        <div className="bg-white">
            <CompanyInfo />
            <Header />
            <div className="flex flex-row">
                <div className="md:w-1/6"></div>
                <div className="md:w-4/6">
                    {id ? <ArticleDetail id={id} /> : <div>Loading...</div>}
                </div>
                <div className="md:w-1/6"></div>
            </div>
            <Footer />
        </div>
    );
};

export default ArticleDetailPage;
