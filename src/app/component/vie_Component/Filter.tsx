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
      title:
        "Content",
      author: "",
      publishDate: "2023-06-30",
      page: "/vie/ci1",
      volume: "Volume 1",
      issue: "Issue 1",
      readArticle:""},
    {
    title:
      "Development of Biodegradable Molded Sheets of Deoiled Rice Bran (DRB) Through Extrusion Technique",
    author: "Tanuja Srivastava",
    publishDate: "2023-06-30",
    page: "/vie/v1i1p1",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:"" },
  {
    title: "Role of Modern Technologies in Future Dimensions of Teaching",
    author: "Deepika Bahri",
    publishDate: "2023-06-30",
    page: "/vie/v1i1p2",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:""},
  {
    title: "Use of Hindi and regional languages in technical education",
    author: "Dr. Seema Goyal",
    publishDate: "2023-06-30",
    page: "/vie/v1i1p3",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:""},
  {
    title: "A Conceptual Model: Happiness for Kids in Schools",
    author: "Mrs. Supriya",
    publishDate: "2023-06-30",
    page: "/vie/v1i1p4",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:""},
  {
    title: "Review of Hydro Electric Power Plant and its Classifications",
    author: "Amit Kansal",
    publishDate: "2023-06-30",
    page: "/vie/v1i1p5",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:""},
  {
    title:
      "Evaluation of Executive Functions Skills among Youth Taekwondo Players and Non-Taekwondo Players with the Executive Skills Questionnaire-Revised",
    author: "Dipshikha Baruah",
    publishDate: "2023-06-30",
    page: "/vie/v1i1p6",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:""},
  {
    title:
      "The Role Of Behavioural Economics On School Education In India: Opportunities And Challenges",
    author: "Soni Aakash Kumar",
    publishDate: "2023-06-30",
    page: "/vie/v1i1p7",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:""},
  {
    title:
      "Open Educational Resources: An insight into various initiatives at National Level",
    author: "Dr. Madhu Midha ",
    publishDate: "2023-06-30",
    page: "/vie/v1i1p8",
    volume: "Volume 1",
    issue: "Issue 1",
    readArticle:""},
  {
    title:
      "Content",
    author: "",
    publishDate: "2023-09-30",
    page: "/vie/ci2",
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "English-The Most Emphasized Emerging Trend in Global Education System",
    author: "Priya Sharma",
    publishDate: "2023-09-30", // Please provide the actual publish date
    page: "/vie/v1i2p1", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "An Academic Value-Added Mathematical Model in Education Sciences",
    author: "Pramod N Belkhode",
    publishDate: "2023-09-30", // Please provide the actual publish date
    page: "/vie/v1i2p2", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "Impact of COVID-19 on the Education System: A Comprehensive Analysis",
    author: "Dr. Sunita",
    publishDate: "2023-09-30", // Please provide the actual publish date
    page: "/vie/v1i2p3", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "The Impact of Digital Marketing on Businesses",
    author: "Htet Ne Oo",
    publishDate: "2023-09-30", // Please provide the actual publish date
    page: "/vie/v1i2p4", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "Spectrum of Life- A Critical Review",
    author: "Samriti Khosla",
    publishDate: "2023-09-30", // Please provide the actual publish date
    page: "/vie/v1i2p5", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "Developing Reading Competence at the Preparatory Stage",
    author: "Rosy Jain",
    publishDate: "2023-09-30", // Please provide the actual publish date
    page: "/vie/v1i2p6", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "Visual Interaction Technique in Human Computer Interaction and its Usability in Virtual Keyboard",
    author: "Heena Wadhwal",
    publishDate: "2023-09-30", // Please provide the actual publish date
    page: "/vie/v1i2p7", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "The Impact of Happiness Curriculum on the Mental Health and Emotional Wellbeing of Government School Children of Delhi",
    author: "Tannu Ajmani",
    publishDate: "2023-09-30", // Please provide the actual publish date
    page: "/vie/v1i2p8", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 2",
    readArticle:""},
  {
    title: "Conent",
    author: "",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/cv1i3", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:""},
  {
    title: "Moral Values and Ethics in School Education - A Practical Approach",
    author: "Piyush Punj ",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/v1i3p1", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:""},
  {
    title: "Health and Wellness Interlaced in The Bhagavad Gita",
    author: "Ranjana",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/v1i3p2", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:""},  {
    title: "Induction of Startup Culture on School Level ",
    author: "Divyanshu",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/v1i3p3", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:""},  {
    title: "Exploring the Potential of IoST for Smart City Development  ",
    author: "Shreya",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/v1i3p4", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:""},  {
    title: "Sustainable Development: Financial development a curse or boon for environment: With Special reference to CO2 emission",
    author: "Monika Rani & Dr. Sapna",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/v1i3p5", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:"" },    {
    title: "Positive Impact of Psychoneurobics Techniques in Inculcating Health & Wellness",
    author: "Dr. Disha Khanna",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/v1i3p6", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:""},
  {
    title: "A study on Indian Mathematicians and their Contributions in the Development of Mathematics ",
    author: "Gaurav Varshney",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/v1i3p7", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:""},
  {
    title: "Augmenting Techno-Pedagogical Competencies of Pre-Service Trainees for Designing E-Content through Collaborative Training Model",
    author: "Ms. Seema Rani Thappa    ",
    publishDate: "2023-12-31", // Please provide the actual publish date
    page: "/vie/v1i3p8W", // Please provide the actual page number
    volume: "Volume 1",
    issue: "Issue 3",
    readArticle:""},



    // -------Volume 2 Started Here-----
  {
    title: "Conent",
    author: "",
    publishDate: "2023-03-31", // Please provide the actual publish date
    page: "/vie/cv2i1", // Please provide the actual page number
    volume: "Volume 2",
    issue: "Issue 1",
    readArticle:""},
 
  {
    title: "Load Frequency Control for Two-Area Deregulated Power System",
    author: "Anupma Gupta",
    publishDate: "2024-03-31",
    page: "/vie/v2i1p1",
    volume: "Volume 2",
    issue: "Issue 1",
    readArticle:"" },
  {
    title: "Attitude of Pre-Service Teachers of B.Ed.: Regarding Digital Literacy in The Teacher Education Programme in Nep2020",
    author: "Prof. Babita Bhardwaj & Dr. Poonam Gaur",
    publishDate: "2024-03-31",
    page: "/vie/v2i1p2",
    volume: "Volume 2",
    issue: "Issue 1",
    readArticle:""},
  {
    title: "Study onward clustering strategy along with Assorted K-mean Technique",
    author: "Pardeep Singh Tiwana",
    publishDate: "2024-03-31",
    page: "/vie/v2i1p3",
    volume: "Volume 2",
    issue: "Issue 1",
    readArticle:""},
  {
    title: "Bhartiya Gurukul System as a Pedagogical Model in the Context of NEP 2020",
    author: "P. Lavanya",
    publishDate: "2024-03-31",
    page: "/vie/v2i1p4",
    volume: "Volume 2",
    issue: "Issue 1",
    readArticle:""},
  {
    title: "Scenario in Private Schools and Government Schools regarding Skill Development under NEP 2020",
    author: "Meenal Raman",
    publishDate: "2024-03-31",
    page: "/vie/v2i1p5",
    volume: "Volume 2",
    issue: "Issue 1",
    readArticle:""},
  
  {
    title: "Social Media's Impression on Interpersonal Communication in People",
    author: "Heena Wadhwa",
    publishDate: "2024-03-31",
    page: "/vie/v2i1p6",
    volume: "Volume 2",
    issue: "Issue 1",
    readArticle:""},
  {
    title: "Unlocking the Learning Power of Play: Exploring Learners' Preferences for Game Mechanics and Dynamics in Math Education",
    author: "Purvi B. Arora",
    publishDate: "2024-03-31",
    page: "/vie/v2i1p7",
    volume: "Volume 2",
    issue: "Issue 1",
    readArticle:"" },
  {
    title: "",
    author: "",
    publishDate: "", // Please provide the actual publish date
    page: "", // Please provide the actual page number
    volume: "Volume 2",
    issue: "Issue 2",
    readArticle:""},  {
    title: "",
    author: "",
    publishDate: "", // Please provide the actual publish date
    page: "", // Please provide the actual page number
    volume: "Volume 2",
    issue: "Issue 3",
    readArticle:""},
  {
    title: "",
    author: "",
    publishDate: "", // Please provide the actual publish date
    page: "", // Please provide the actual page number
    volume: "Volume 2",
    issue: "Issue 4",
    readArticle:""},

    // -------Volume 3 Started Here-----
  {
    title: "",
    author: "",
    publishDate: "", // Please provide the actual publish date
    page: "", // Please provide the actual page number
    volume: "Volume 3",
    issue: "Issue 1",
    readArticle:""},
  {
    title: "",
    author: "",
    publishDate: "", // Please provide the actual publish date
    page: "", // Please provide the actual page number
    volume: "Volume 3",
    issue: "Issue 2",
    readArticle:""},  
  // {
  //   title: "",
  //   author: "",
  //   publishDate: "", // Please provide the actual publish date
  //   page: "", // Please provide the actual page number
  //   volume: "Volume 3",
  //   issue: "Issue 3",
  //   readArticle:""},
    
  // {
  //   title: "",
  //   author: "",
  //   publishDate: "", // Please provide the actual publish date
  //   page: "", // Please provide the actual page number
  //   volume: "Volume 3",
  //   issue: "Issue 4",
  //   readArticle:""},
  // {
  //   title: "",
  //   author: "",
  //   publishDate: "", // Please provide the actual publish date
  //   page: "", // Please provide the actual page number
  //   volume: "Volume 4",
  //   issue: "Issue 1",
  //   readArticle:""  },
  // {
  //   title: "",
  //   author: "",
  //   publishDate: "", // Please provide the actual publish date
  //   page: "", // Please provide the actual page number
  //   volume: "Volume 4",
  //   issue: "Issue 2",
  //   readArticle:""
  // },  {
  //   title: "",
  //   author: "",
  //   publishDate: "", // Please provide the actual publish date
  //   page: "", // Please provide the actual page number
  //   volume: "Volume 4",
  //   issue: "Issue 3",
  //   readArticle:""
  // },
  // {
  //   title: "",
  //   author: "",
  //   publishDate: "", // Please provide the actual publish date
  //   page: "", // Please provide the actual page number
  //   volume: "Volume 4",
  //   issue: "Issue 4",
  //   readArticle:""
  // },
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
