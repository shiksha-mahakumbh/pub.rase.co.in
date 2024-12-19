import React, { useState } from "react";
import Link from "next/link";
import { IssuePage } from "./IssuePage";
import { toast } from "react-hot-toast";

interface Article {
  title: string;
  author: string;
  page: string;
  publishDate: string;
  volume?: string;
  issue?: string;
  readArticle?: string; // Assuming this is the key in JSON for the TSX route
}

interface ArticleListProps {
  articles: Article[];
}

const DocumentViewer: React.FC<{ content: string; onClose: () => void }> = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded shadow-lg w-11/12 max-w-4xl p-4">
        {/* Cross Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full hover:bg-red-700 focus:outline-none"
        >
          ×
        </button>
        <iframe src={content} width="100%" height="600px" title="Document Viewer" className="rounded" />
      </div>
    </div>
  );
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const [showDocumentViewer, setShowDocumentViewer] = useState(false);
  const [selectedArticleContent, setSelectedArticleContent] = useState("");

  const handlePage = (param1: string) => {
    IssuePage.staticVariable = param1;
    toast.success("काम जारी है।");
  };

  const openDocumentViewer = (content: string) => {
    setSelectedArticleContent(content + ".pdf");
    setShowDocumentViewer(true);
  };

  return (
    <div className="p-4">
      {articles.map((article, index) => (
        <div key={index} className="bg-white p-4 rounded shadow-md mb-4 border-2 border-primary">
          {article.title || article.author ? (
            <>
              <Link href="/" onClick={() => handlePage(article.page)}>
                <div className="mb-2">
                  <h3 className="text-black font-semibold">{article.title}</h3>
                  {article.author && (
                    <p className="text-gray-600">लेखक: {article.author}</p>
                  )}
                </div>
              </Link>
              <div className="flex flex-row space-x-1 w-full">
                <button className="text-black px-1 py-1 md:w-1/3 border-l-2 border-r-2 border-indigo-700">
                  {article.publishDate}
                </button>
                <button
                  className="text-black hover:text-white px-1 py-1 hover:rounded hover:bg-green-700 md:w-1/3 border-r-2 border-green-700"
                  onClick={() => openDocumentViewer(article.page)}
                  rel="noopener noreferrer"
                >
                  दस्तावेज़ देखें
                </button>
                <a
                  className="text-black hover:text-white px-1 py-1 hover:rounded hover:bg-indigo-700 md:w-1/3 border-r-2 border-indigo-700 block mx-auto text-center"
                  href={`${article.page}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  पीडीएफ डाउनलोड करें
                </a>
                {article.readArticle && (
                  <Link href={article.readArticle} legacyBehavior>
                    <a
                      className="text-black hover:text-white px-1 py-1 hover:rounded hover:bg-indigo-700 md:w-1/3 border-r-2 border-indigo-700 block mx-auto text-center"
                    >
                      लेख पढ़ें
                    </a>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <p className="text-gray-600">
              {article.volume} - {article.issue} जल्द ही अपलोड किया जाएगा।
            </p>
          )}
        </div>
      ))}

      {showDocumentViewer && (
        <DocumentViewer
          content={selectedArticleContent}
          onClose={() => setShowDocumentViewer(false)}
        />
      )}
    </div>
  );
};

export default ArticleList;
