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
      title: "विकसित भारत",
      description: "यह डीएचई का पहला जर्नल है।",
      imgUrl: "vbh.png",
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

  let about = `इस बड़े आयोजन में भागीदारी बहुत ही ज्यादा थी। परियोजनाओं और पत्रों की संख्या भी अत्यधिक थी। समाज के सभी वर्गों के अच्छे कार्यों को देखकर यह निर्णय लिया गया कि इसे संरक्षित किया जाए और इस सामूहिक आंदोलन की आधिकारिक पत्रिका के माध्यम से इसे और बढ़ावा दिया जाए। तदनुसार, शिक्षा महाकुंभ की गूंज एक त्रैमासिक पत्रिका में बदल गई जिसे लॉन्च किया जाएगा यानी "विकसित भारत", जो शिक्षा के क्षेत्र में डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन के एक विशिष्ट प्रयास, शिक्षा महाकुंभ पहल का एक अभिन्न अंग है। शिक्षा के क्षेत्र में व्यापक विशेषज्ञता और गहन अंतर्दृष्टि के कारण आप इस प्रतिष्ठित मंच के लिए एक मूल्यवान योगदानकर्ता के रूप में स्थापित हैं।

शिक्षा प्रगति के प्रति समर्पित: "विकसित भारत" वैश्विक शैक्षिक परिदृश्य से संबंधित चर्चाओं, शोध और अंतर्दृष्टि को पोषित करने के लिए प्रतिबद्ध है। हमें दृढ़ विश्वास है कि शिक्षा के प्रति आपके अनुभव और अटूट प्रतिबद्धता इस पत्रिका के उद्देश्यों के साथ पूरी तरह से मेल खाते हैं। सक्रिय भागीदारी शिक्षा पर विमर्श को आकार देने में महत्वपूर्ण भूमिका निभा सकती है।

शैक्षिक पहलुओं का व्यापक कवरेज: इस पत्रिका की व्यापक कवरेज के माध्यम से शिक्षा की बहुआयामी दुनिया की गहन खोज पर निकलें। अग्रणी शोध से लेकर दूरदर्शी दृष्टिकोण तक, पत्रिका की टीम हर पहलू की बारीकी से जांच करती है, यह सुनिश्चित करते हुए कि आप सीखने और शिक्षण के निरंतर विकसित हो रहे क्षेत्र में सबसे आगे बने रहें।

विकसित भारत पत्रिका शिक्षा के क्षेत्र में ज्ञान, प्रेरणा और नवाचार से भरी दुनिया का पासपोर्ट है।
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
