// pages/index.tsx
import React, { useState, useMemo } from 'react';
import ArticleList from './ArticleList';
import Link from 'next/link';


const Filter: React.FC = () => {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allArticles: Article[] = [ 
    {
      title: "विषय सूचि",
      author: "",
      publishDate: "2024-06-30",
      page: "ci1",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle:""
    },
    {
      title: "भारतीय पारिस्थितिकी तंत्र: स्टार्ट अप के लिए सरकारी पहल और योजनाएं",
      author: "डॉ नमिता कोचर, डॉ. समीर वर्मा",
      publishDate: "2024-06-30",
      page: "v1i1p1",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle:"/Paper1",
    },
  {
    title: "ब्लॉकचेन क्रांति: पारदर्शी नवाचार के माध्यम से उद्योगों में बदलाव",
    author: "रामभतेरी",
    publishDate: "2024-06-30",
    page: "v1i1p2",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:"/Paper2"
  },
  {
    title: "शिक्षा में क्रांतिकारी बदलाव: आधुनिक शिक्षा में मशीन लर्निंग और आर्टिफिशियल इंटेलिजेंस युग का अध्ययन",
    author: "मोनिका, डॉ. सुनीता",
    publishDate: "2024-06-30",
    page: "v1i1p3",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:"/Paper3"
  },
  {
    title: "प्रकृति की अपील: हर्बल कॉस्मेटिक उत्पादों के लिए उपभोक्ता खरीद इरादों की जांच",
    author: "डॉ. अदिति शर्मा, नीतू, तुलसी रानी",
    publishDate: "2024-06-30",
    page: "v1i1p4",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:"/Paper4"
  },
  {
    title: "बिजनेस कम्युनिकेशन में सफल स्टार्टअप्स के अनुभवों से सीखी गई चुनौतियाँ और सबक",
    author: "अपर्णा",
    publishDate: "2024-06-30",
    page: "v1i1p5",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:"/Paper5"
  }
  
];

const volumes: string[] = Array.from(new Set(allArticles.map((article) => article.volume)));

  const [selectedVolume, setSelectedVolume] = useState<string>(volumes[0]);
  const [selectedIssue, setSelectedIssue] = useState<string>('');

  const filteredArticles = useMemo(() => {
    if (selectedIssue === '') {
      return [];
    }
    return allArticles.filter(
      (article) => article.volume === selectedVolume && article.issue === selectedIssue
    );
  }, [allArticles, selectedVolume, selectedIssue]);

  // Create a mapping of unique issues along with their corresponding publish date
  const issuesWithDates = useMemo(() => {
    const issuesMap = new Map<string, string>(); // Map to store issue as key and publishDate as value

    allArticles.forEach((article) => {
      if (article.volume === selectedVolume) {
        if (!issuesMap.has(article.issue)) {
          // Add the first occurrence of the issue along with its publish date
          issuesMap.set(article.issue, article.publishDate);
        }
      }
    });

    return Array.from(issuesMap.entries()); // Convert Map to an array of [issue, publishDate] pairs
  }, [allArticles, selectedVolume]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVolume = e.target.value;
    setSelectedVolume(selectedVolume);
    // Reset selectedIssue when volume changes
    setSelectedIssue('');
  };

  const handleIssueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIssue(e.target.value);
  };

  return (
    <div>
      <div className="mx-auto p-4 flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold mb-4 text-black">Table of contents</h1>

        <div className="mb-4 text-black">
          <label htmlFor="volume" className="mr-2">
            Select Volume:
          </label>
          <select
            id="volume"
            value={selectedVolume}
            onChange={handleVolumeChange}
            className="border rounded p-2"
          >
            {volumes.map((volume) => (
              <option key={volume} value={volume} className="m-4">
                {volume}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 text-black">
          <label htmlFor="issue" className="mr-2">
            
          </label>
          <select
            id="issue"
            value={selectedIssue}
            onChange={handleIssueChange}
            className="border rounded p-2"
          >
            <option value="">Select Issue</option>
            {issuesWithDates.map(([issue, publishDate]) => (
              <option key={issue} value={issue}>
                {issue} (Published: {new Date(publishDate).toLocaleDateString()})
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredArticles.length > 0 && <ArticleList articles={filteredArticles} />}
    </div>
  );
};

export default Filter;
