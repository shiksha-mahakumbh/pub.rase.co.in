"use client";

import React, { useState, useEffect } from "react";
import Login from "../../component/vbe_Component/Login";
import AuthorDetails from "../../component/vbe_Component/AuthorDetails";
import ManuscriptAttachment from "../../component/vbe_Component/ManuscriptAttachment";
import ArticleDetails from "../../component/vbe_Component/ArticleDetails";
import ProgressBar from "../../component/vbe_Component/ProgressBar";
import Footer from "../../component/vbe_Component/Footer";
import Header from "../../component/vbe_Component/Header";
import CompanyInfo from "../../component/vbe_Component/CompanyInfo";

const ManuscriptSubmissionPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedWebsite, setSelectedWebsite] = useState<string>("website1");

  // Define a mapping of websites to their respective external routes
  const websiteRoutes: { [key: string]: string } = {
    website1: "https://vbe.rase.co.in/SubmitManuscript",
    website2: "https://vbh.rase.co.in/SubmitManuscript",
    website3: "https://vie.rase.co.in/SubmitManuscript",
    website4: "https://vih.rase.co.in/SubmitManuscript",
  };

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
        setStep(2);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const handleLogin = (email: string, password: string) => {
    const mockToken = "mock-auth-token";
    if (email && password) {
      localStorage.setItem("token", mockToken);
      setIsLoggedIn(true);
      setStep(2);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleStepChange = (newStep: number) => {
    if (newStep >= 1 && newStep <= 4) {
      setStep(newStep);
    }
  };

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  // Handle the website change and open the external link in a new tab
  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value;
    setSelectedWebsite(selected);
    window.open(websiteRoutes[selected], "_blank"); // Open the external URL in a new tab
  };

  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Top Content */}
      <CompanyInfo />
      <Header />

      {/* Sidebar for Small Screens - Positioned at the top */}
      <div className="block lg:hidden w-full p-4 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-xl font-bold mb-4">Select Website</h2>
        <div className="space-y-4">
        <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="website"
              value="website1"
              checked={selectedWebsite === "website1"}
              onChange={handleWebsiteChange}
            />
            <span>Manuscript Submission for Viksit Bharat English</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="website"
              value="website2"
              checked={selectedWebsite === "website2"}
              onChange={handleWebsiteChange}
            />
            <span>Manuscript Submission for Viksit Bharat Hindi</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="website"
              value="website3"
              checked={selectedWebsite === "website3"}
              onChange={handleWebsiteChange}
            />
            <span>Manuscript Submission for Viksit India English</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="website"
              value="website4"
              checked={selectedWebsite === "website4"}
              onChange={handleWebsiteChange}
            />
            <span>Manuscript Submission for Viksit India Hindi</span>
          </label>
        </div>
      </div>

      {/* Static Heading */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold">
          Manuscript Submission For Viksit Bharat English
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
        <ProgressBar currentStep={step} onStepClick={handleStepChange} />

        <div className="mt-6">
          {loading && <div className="text-center">Loading...</div>}
          {!loading && step === 1 && !isLoggedIn && (
            <Login onLogin={handleLogin} />
          )}
          {step === 2 && (
            <AuthorDetails onNext={handleNextStep} onPrevious={handlePreviousStep} />
          )}
          {step === 3 && (
            <ArticleDetails onNext={handleNextStep} onPrevious={handlePreviousStep} />
          )}
          {step === 4 && (
            <ManuscriptAttachment onPrevious={handlePreviousStep} />
          )}
        </div>
      </div>

      {/* Sidebar for Large Screens */}
      <div className="lg:absolute lg:left-6 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-64 lg:p-6 lg:bg-white lg:shadow-lg lg:rounded-lg lg:block hidden">
        <h2 className="text-xl font-bold mb-4">Select Website</h2>
        <div className="space-y-4">
        <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="website"
              value="website1"
              checked={selectedWebsite === "website1"}
              onChange={handleWebsiteChange}
            />
            <span>Manuscript Submission for Viksit Bharat Hindi</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="website"
              value="website2"
              checked={selectedWebsite === "website2"}
              onChange={handleWebsiteChange}
            />
            <span>Manuscript Submission for Viksit Bharat Hindi</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="website"
              value="website3"
              checked={selectedWebsite === "website3"}
              onChange={handleWebsiteChange}
            />
            <span>Manuscript Submission for Viksit India English</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="website"
              value="website4"
              checked={selectedWebsite === "website4"}
              onChange={handleWebsiteChange}
            />
            <span>Manuscript Submission for Viksit India Hindi</span>
          </label>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ManuscriptSubmissionPage;
