// pages/index.tsx
import React, { useState, useMemo } from 'react';
import ArticleList from './ArticleList';
import Link from 'next/link';

const Filter: React.FC = () => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allArticles: Article[] = [
    {
      title: "Content",
      author: "",
      publishDate: "2024-06-30",
      page: "ci1",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle: ""
    },
    {
      title: "Breaking Ground: Unveiling the Overlooked Challenge of Cultivating Agripreneurship Intentions in North Haryana's Rural Agrarian Community",
      author: "Mrs. Tamanna, Dr. Meenakshi",
      publishDate: "2024-06-30",
      page: "v1i1p1",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle:"/Paper1",
    },
    {
      title: "IoT-enabled devices: Innovation in technology for the promotion of distance learning and E-learning in COVID-19",
      author: "Indu Bala, Dr. Sunita",
      publishDate: "2024-06-30",
      page: "v1i1p2",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle:"/Paper1",
    },
    {
      title: "Skill Development as per the need of Hour",
      author: "Dr. Babita Rani",
      publishDate: "2024-06-30",
      page: "v1i1p3",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle:"/Paper1",
    },
    {
      title: "Reducing the wastage of the grains: enhancing grain preservation technique",
      author: "Mayank Mani Prasad, Dr. Sushil K Kansal, Dr. Sanjeev Gautam",
      publishDate: "2024-06-30",
      page: "v1i1p4",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle:"/Paper1",
    },
    {
      title: "Role Of Government Policies And Initiatives In Empowering Academic Driven Startups",
      author: "Dr. Aditi Sharma, Nisha Kumari, Ritu Kumari",
      publishDate: "2024-06-30",
      page: "v1i1p5",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle:"/Paper1",
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
