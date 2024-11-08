// pages/index.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import JournalCard from "./JournalCard";
import Navigation from "./Navigation";
import NavBar from "./NavBar";
const HomePage: React.FC = () => {
  const recentArticles = [{ title: "जल्द ही आ रहा है", slug: "article-1" }];

  const journalDataList = [
    {
      title: "विकसित इंडिया",
      description: "यह डीएचई का पहला जर्नल है।",
      imgUrl: "vih.png",
      publishedDate: "25 अक्टूबर, 2023",
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

  let about = `"विकसित इंडिया" एक त्रैमासिक पत्रिका है, जो प्रतिष्ठित "शिक्षा महाकुंभ/कुंभ की गूंज" का एक परिवर्तनीय विकास है। यह पत्रिका शिक्षा महाकुंभ पहल का एक अभिन्न हिस्सा है, जिसे डिपार्ट्मन्ट ऑफ होलिस्टिक एजुकेशन (डीएचई) द्वारा संचालित किया जाता है। डीएचई, जिसे प्रसिद्ध वैज्ञानिक और सफल लेखक डॉ. ठाकुर एसकेआर द्वारा स्थापित किया गया है, शिक्षा को केवल पृष्ठों पर अंक से अधिक मानता है। यह युवा मस्तिष्कों को समाज के मूल्यवान संसाधनों में पूरी तरह से परिवर्तित करने का प्रतीक है।

इस भावना में, "विकसित इंडिया" शिक्षा की उन्नति के लिए समर्पित है। हम दृढ़ता से मानते हैं कि शिक्षा का मूल्य केवल शैक्षणिक अंकों से नहीं आंका जा सकता। सच्ची शिक्षा व्यक्तियों का समग्र विकास करती है, उन्हें ऊर्जा, कौशल, और मूल्यों से समृद्ध करती है जो पाठ्यपुस्तकों से परे जाते हैं। हमारी पत्रिका उन सभी के लिए एक खुला आमंत्रण है जो इस दृष्टिकोण को साझा करते हैं और वैश्विक शैक्षिक परिदृश्य से संबंधित चर्चाओं, शोधों और अंतर्दृष्टियों को पोषित करने के लिए प्रतिबद्ध हैं।

"विकसित इंडिया" शैक्षिक पहलुओं की एक बहु-विस्तृत कवरेज प्रदान करती है, जिसमें स्कूल शिक्षा से लेकर उच्च शिक्षा, भाषा शिक्षा से तकनीकी उन्नति, बाल शिक्षा से वैज्ञानिक अनुसंधान शामिल हैं। इसमें अग्रणी शोध, दूरदर्शी दृष्टिकोण, और शिक्षण और सीखने के सतत-विकसित क्षेत्र के हर पहलू की गहन जांच शामिल है। यह ज्ञान, प्रेरणा, और नवाचार से भरे एक क्षेत्र का पासपोर्ट है जो शिक्षा के क्षेत्र में उपलब्ध कराता है।

"विकसित इंडिया" में शामिल विषय हमारे समग्र शिक्षा दृष्टिकोण के प्रति हमारी प्रतिबद्धता का प्रमाण हैं। हम स्कूल और विश्वविद्यालय शिक्षा, भाषा शिक्षा, बाल शिक्षा, अनुसंधान और विकास, कानूनी शिक्षा, खेल, प्रौद्योगिकी, और बुनियादी विज्ञान की खोज करते हैं। हमारी पत्रिका का बहु-विषयक दृष्टिकोण यह सुनिश्चित करता है कि आप हमेशा बदलते शैक्षिक परिदृश्य के अग्रणी बने रहें।

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
