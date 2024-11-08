"use client"; // This directive makes the component a client-side component

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface ArticleDetailsProps {
  onNext: () => void;
  onPrevious: () => void;
}

const categories = ['Science', 'Technology', 'Engineering', 'Mathematics', 'Medicine', 'Literature']; // Example categories

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ onPrevious, onNext }) => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  // Fetch user ID and manuscript ID from local storage
  const userId = localStorage.getItem('userId');
  const manuscriptId = localStorage.getItem('manuscriptId');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if manuscriptId exists
    if (!manuscriptId) {
      setError('Manuscript ID not found. Please make sure you have a manuscript ID.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      await axios.post('https://vie-rase-backend.onrender.com/api/vbh_submit-article-details', {
        title,
        abstract,
        category,
        keywords,
        userId,
        manuscriptId, // Include manuscriptId in the submission
      });

      setSuccess('Article details submitted successfully! Redirecting...');
      setTimeout(() => {
        onNext(); // Move to the next step after successful submission
      }, 2000); // Delay before moving to the next step
    } catch (err) {
      setError('An error occurred while submitting article details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Article Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter article title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Abstract</label>
          <textarea
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter article abstract (250-300 words)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Keywords</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter keywords (comma separated)"
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Previous
          </button>
          <button
            type="submit"
            className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleDetails;
