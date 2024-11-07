'use client'
import React  from 'react'
import {  useState} from "react";
import CompanyInfo from '../../component/vbe_Component/CompanyInfo'
import AlphabetList from '../../component/vbe_Component/AlphabetList'
import ResearchArticleCard from '../../component/vbe_Component/ResearchArticleCard'
import Footer from '../../component/vbe_Component/Footer';

function Issues() {
    
  const [searchQuery, setSearchQuery] = useState('');

  const researchArticles = [
    {
      title: "Caputo Fractional Derivative for Analysis of COVID-19 and HIV/AIDS Transmission",
      date: "29 Sep 2023",
      author: "Kumama Regassa Cheneke",
      description:
        "In this study, Caputo fractional derivative model of HIV and COVID-19 infections is analyzed. Moreover, the well-posedness of...",
    
    },
    // Add more articles here
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    setSearchQuery(e.target.value);
  };
  const researchArticlesList = researchArticles.filter((journalData) =>
  journalData.title.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <div className= "bg-white">
         <CompanyInfo/>
          <header className="py-2 bg-primary text-white text-center">
          
          <div className="mx-4">
            <input
              type="text"
              placeholder="Search articles"
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-full w-full sm:w-96 md:w-1/2 bg-gray-100 text-gray-800 focus:outline-none"
            />
          </div>
        </header>
        
        <div className="flex flex-row space-x-6 ">
            <div className="w-0.2/12">
                <AlphabetList />
            </div>
            <div className="w-11/12 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
                {researchArticlesList.length === 0 ? (
                    <p className="text-xl ">No Issues found</p>
                    ) : 
                    (
                            researchArticlesList.map((article, index) => (
                                <ResearchArticleCard
                                key={index}
                                title={article.title}
                                date={article.date}
                                author={article.author}
                                description={article.description}
                                />
                            )
                        )
                    )
                }
                   
                </div>  
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Issues;
