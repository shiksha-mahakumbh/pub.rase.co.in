import React, { useState } from "react";
import Link from "next/link";
import { IssuePage } from "./IssuePage";
import { toast } from "react-hot-toast";
import Filter from './Filter';

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

const DocumentViewer: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="document-viewer">
      <iframe src={content} width="100%" height="600px" title="Document Viewer"></iframe>
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
    setSelectedArticleContent(content + '.pdf');
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
                  <Link
                    href={article.readArticle}
                    legacyBehavior
                  >
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
        <div className="modal" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '90%', width: '90%', maxHeight: '90%', backgroundColor: '#fff', borderRadius: '10px', padding: '22px', overflow: 'auto' }}>
            <span className="bg-primary rounded-sm p-2 justify-center text-white hover:cursor-pointer focus:outline-none focus:ring-10 focus:ring-inset" onClick={() => setShowDocumentViewer(false)} style={{ position: 'relative', top:'-6px', right: '0px' }}>
              बंद करें
            </span>
            <DocumentViewer content={selectedArticleContent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
