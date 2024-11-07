// pages/index.tsx
import React, { useState, useMemo } from 'react';
import ArticleList from './ArticleList';

// Define the Article type to improve type safety
type Article = {
  title: string;
  author: string;
  publishDate: string;
  page: string;
  volume: string;
  issue: string;
  readArticle: string;
};

const Filter: React.FC = () => {
  // Define the allArticles array directly in this component (remove the duplicate code)
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
      title: "Development of Biodegradable Molded Sheets of Deoiled Rice Bran (DRB) Through Extrusion Technique",
      author: "Tanuja Srivastava",
      publishDate: "2024-06-30",
      page: "v1i1p1",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle: ""
    },
    {
      title: "Role of Modern Technologies in Future Dimensions of Teaching",
      author: "Deepika Bahri",
      publishDate: "2024-06-30",
      page: "v1i1p2",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle: "/ArticleDetail/2"
    },
    {
      title: "Use of Hindi and regional languages in technical education",
      author: "Dr. Seema Goyal",
      publishDate: "2024-06-30",
      page: "v1i1p3",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle: ""
    },
    {
      title: "A Conceptual Model: Happiness for Kids in Schools",
      author: "Mrs. Supriya",
      publishDate: "2024-06-30",
      page: "v1i1p4",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle: ""
    },
    {
      title: "Review of Hydro Electric Power Plant and its Classifications",
      author: "Amit Kansal",
      publishDate: "2024-06-30",
      page: "v1i1p5",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle: ""
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
