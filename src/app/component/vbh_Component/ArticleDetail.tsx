import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Interface for references
interface Refrence {
  text: string;
  url: string;
}

// Interface for article details
interface ArticleDetail {
  DOI: string;
  ArticleInfo: {
    Received: string;
    Revised: string;
    Published: string;
    Editor: string;
  };
  ArticleDetails: {
    Title: string;
    Email: string;
    Authors: Array<{
      Name: string;
      Position: string;
      Affiliation: string;
    }>;
    CoAuthors: Array<{
      Name: string;
      Position: string;
      Affiliation: string;
    }>;
  };
  Abstract: string;
  Keywords: string;
  Heading: Array<{
    Title: string;
    Content: string;
    SubHeadings?: Array<{ // Made SubHeadings optional
      SubTitle: string;
      SubContent: string;
    }>;
  }>;
  Conclusion: string;
  Recommendations: string;
  Refrences: Refrence[];
}

// Props interface to accept article ID
interface ArticleDetailProps {
  id: string;
}

// Main component to fetch and display article details
const ArticleDetail: React.FC<ArticleDetailProps> = ({ id }) => {
  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://vie-rase-backend.onrender.com/api/vbh_getarticle/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('An error occurred while fetching the article details.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!article) return <div>No article found.</div>;

  return (
    <div className="container mx-auto">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-200 p-4 shadow-md">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <ul>
            <li>
              <a href="#abstract" className="text-blue-600 hover:underline">Abstract</a>
            </li>
            <li>
              <a href="#headings" className="text-blue-600 hover:underline">Headings</a>
            </li>
            <li>
              <a href="#conclusion" className="text-blue-600 hover:underline">Conclusion</a>
            </li>
            <li>
              <a href="#references" className="text-blue-600 hover:underline">References</a>
            </li>
          </ul>

          {/* Article Information */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-teal-600">Article Information</h2>
            <p className="text-gray-800">
              <strong className="text-purple-600">Received:</strong> {article.ArticleInfo.Received}
            </p>
            <p className="text-gray-800">
              <strong className="text-purple-600">Revised:</strong> {article.ArticleInfo.Revised}
            </p>
            <p className="text-gray-800">
              <strong className="text-purple-600">Published:</strong> {article.ArticleInfo.Published}
            </p>
            <p className="text-gray-800">
              <strong className="text-purple-600">Editor:</strong> {article.ArticleInfo.Editor}
            </p>
          </div>

          {/* Article Details */}
          <div className="mb-4">
            {/* Authors */}
            <h3 className="text-lg font-semibold text-teal-600">Authors</h3>
            <ul className="text-gray-800">
              {article.ArticleDetails.Authors.map((author, index) => (
                <li key={index}>
                  {author.Name} ({author.Position}) - {author.Affiliation}
                </li>
              ))}
              <p className="text-gray-800">
                <strong className="text-purple-600">Author Email:</strong> {article.ArticleDetails.Email}
              </p>
            </ul>

            {/* Co-Authors */}
            <h3 className="text-lg font-semibold text-teal-600">Co-Authors</h3>
            <ul className="text-gray-800">
              {article.ArticleDetails.CoAuthors.map((coAuthor, index) => (
                <li key={index}>
                  {coAuthor.Name} ({coAuthor.Position}) - {coAuthor.Affiliation}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Article Details */}
        <div className="w-3/4 p-4">
          {/* Article Title */}
          <h1 className="text-3xl font-bold mb-4 text-purple-700">{article.ArticleDetails.Title}</h1>

          {/* Abstract */}
          <div className="mb-4" id="abstract">
            <h2 className="text-xl font-semibold text-teal-600">Abstract</h2>
            <p className="text-gray-800">{article.Abstract}</p>
          </div>

          {/* Keywords */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-teal-600">Keywords</h2>
            <p className="text-gray-800">{article.Keywords}</p>
          </div>

          {/* Headings */}
          <div className="mb-4" id="headings">
            <h2 className="text-xl font-semibold text-teal-600">Headings</h2>
            {article.Heading.map((heading, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-purple-600">{heading.Title}</h3>
                <p className="text-gray-800">{heading.Content}</p>
                {heading.SubHeadings?.map((subHeading, subIndex) => ( // Use optional chaining
                  <div key={subIndex} className="ml-4">
                    <h4 className="font-semibold text-blue-600">{subHeading.SubTitle}</h4>
                    <p className="text-gray-800">{subHeading.SubContent}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mb-4" id="conclusion">
            <h2 className="text-xl font-semibold text-teal-600">Conclusion</h2>
            <p className="text-gray-800">{article.Conclusion}</p>
          </div>

          {/* Recommendations */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-teal-600">Recommendations</h2>
            <p className="text-gray-800">{article.Recommendations}</p>
          </div>

          {/* References */}
          <div className="mb-4" id="references">
            <h2 className="text-xl font-semibold text-teal-600">References</h2>
            <ul className="text-gray-800">
              {(article.Refrences || []).map((refrence, index) => (
                <li key={index}>
                  <a href={refrence.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {refrence.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
