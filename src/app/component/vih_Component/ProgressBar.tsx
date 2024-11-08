"use client";

import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, onStepClick }) => {
  const steps = ['Login', 'Author Details','Article Details', 'Manuscript Attachment'];

  return (
    <div className="flex items-center">
      {steps.map((label, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <button
              onClick={() => onStepClick(index + 1)}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                currentStep >= index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'
              } shadow-md transition-transform duration-300 transform ${
                currentStep >= index + 1 ? 'scale-110' : ''
              }`}
            >
              {index + 1}
            </button>
            <div className="text-sm mt-2 text-center">{label}</div>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-grow flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
