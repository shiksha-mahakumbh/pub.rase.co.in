// src/components/ReadArticle.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Article {
  id: number;
  title: string;
}

const ReadArticle: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();

  // Fetch dynamic articles from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://vie-rase-backend.onrender.com/api/vbh_getallarticles');
        // const response = await axios.get('http://localhost:8080/api/vbe_getallarticles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleReadArticle = (path: string) => {
    router.push(path);
  };



  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">All Articles</h1>
      
      {/* Dynamically fetched articles */}
      <ul className="space-y-4 mb-8">
        {articles.map((article) => (
          <li key={article.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200 ease-in-out">
            <span className="text-base font-semibold text-gray-700 flex-1">{article.title}</span>
            <a 
              href={`/ArticleDetail/${article.id}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out w-40 text-center"
            >
              Read Article
            </a>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default ReadArticle;
