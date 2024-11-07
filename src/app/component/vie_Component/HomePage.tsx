// pages/index.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import JournalCard from "./JournalCard";
import Navigation from "./Navigation";
import NavBar from "./NavBar";
const HomePage: React.FC = () => {
  const recentArticles = [{ title: "Comming Soon", slug: "article-1" }];

  const journalDataList = [
    {
      title: "Viksit India",
      description: "This is the first journal of DHE.",
      imgUrl: "vie.jpeg",

      publishedDate: "October 25, 2023",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowRecentArticles(true);
    setShowAboutUs(false);
    setShowGetInvolved(false);
    setAdv(false);
    setEdt(false);
    setSearchQuery(e.target.value);
  };
  const filteredJournalDataList = journalDataList.filter((journalData) =>
    journalData.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredArticles = recentArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let about = `The turn around was massive in this mass event. The projects and the papers were enormous. To see this much turn around in terms of good works of all strata of society, it was decided to preserve it and further promote it through the official journal of this mass movement. Accordingly, Echoes of Shiksha Mahakumbh transformed into a quarterly journal to be launched i.e., Viksit India's which is an integral component of the Shiksha Mahakumbh initiative, a distinguished effort by the Department of Holistic Education in the realm of education. Your extensive expertise and profound insights in the field of education position you as a valuable contributor to this prestigious platform.

Dedicated to education advancement: "Viksit India" is committed to nurturing discussions, research, and insights that pertain to the global educational landscape. We firmly believe that the wealth of experience and unwavering commitment to education align seamlessly with the objectives of this journal. The active participation has the potential to play a pivotal role in shaping the discourse on education.

Comprehensive coverage of educational aspects: Embark on a profound exploration of the multifaceted world of education through this journal's comprehensive coverage. From pioneering research to visionary perspectives, the team of the journal meticulously examine every facet, ensuring that one stays at the forefront of the ever-evolving domain of learning and teaching.

Viksit India journal is the passport to a realm filled with knowledge, inspiration, and innovation within the field of education.
   `;

  const handleScrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  const [showRecentArticles, setShowRecentArticles] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [showAdv, setAdv] = useState(false);
  const [showEdt, setEdt] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  // Use useEffect to update the isMobile state on window resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div></div>;
};

export default HomePage;
