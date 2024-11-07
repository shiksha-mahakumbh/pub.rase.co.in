"use client"; // This makes the component a client-side component

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CoAuthor {
  name: string;
  email: string;
  designation: string;
  organization: string;
  mobile: string;
}

interface ManuscriptDetails {
  id: number;
  title: string;
  abstract?: string;
  category?: string;
  keywords?: string;
  file_path?: string;
  submission_date?: string; // Raw submission date as string from backend
  author_name?: string;
  author_email?: string;
  author_designation?: string;
  author_organization?: string;
  author_mobile?: string;
  co_authors?: CoAuthor[]; // List of co-authors
}

const ManuscriptDetailsComponent: React.FC = () => {
  const [manuscripts, setManuscripts] = useState<ManuscriptDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchManuscripts = async () => {
    const userId = localStorage.getItem('userId'); // Fetch userId from localStorage
  
    if (!userId) {
      setError('User ID not found.');
      return;
    }
  
    try {
      setLoading(true);
      setError(null);
  
      const response = await axios.get(`https://vie-rase-backend.onrender.com/api/vbe_manuscripts/user/${userId}`);
      
      // Log the API response for debugging
      console.log('API Response:', response.data);
  
      if (response.data && response.data.manuscripts && Array.isArray(response.data.manuscripts.manuscripts)) {
        // Convert submission_date strings to Date objects and parse co_authors if it's a string
        const manuscriptsWithDates = response.data.manuscripts.manuscripts.map((manuscript: ManuscriptDetails) => ({
          ...manuscript,
          submission_date: manuscript.submission_date ? new Date(manuscript.submission_date) : undefined,
          co_authors: typeof manuscript.co_authors === 'string'
            ? JSON.parse(manuscript.co_authors) // Parse the stringified co_authors JSON
            : manuscript.co_authors || [] // Ensure co_authors is an array
        }));
        setManuscripts(manuscriptsWithDates);
      } else {
        console.error('Unexpected response format:', response.data);
        setError('Unexpected response format.');
      }
    } catch (err) {
      console.error('Error fetching manuscript details:', err);
      setError('An error occurred while fetching manuscript details.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchManuscripts(); // Fetch manuscripts when the component mounts
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Manuscript Details</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : manuscripts.length === 0 ? (
        <p className="text-center">No manuscripts found.</p>
      ) : (
        <ul className="space-y-6">
          {manuscripts.map((manuscript) => (
            <li key={manuscript.id} className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold">{manuscript.title}</h3>

              {/* Conditionally render each field only if the data exists */}
              {manuscript.abstract && (
                <p><strong>Abstract:</strong> {manuscript.abstract}</p>
              )}
              {manuscript.category && (
                <p><strong>Category:</strong> {manuscript.category}</p>
              )}
              {manuscript.keywords && (
                <p><strong>Keywords:</strong> {manuscript.keywords}</p>
              )}
              {manuscript.file_path && (
                <p><strong>File:</strong> <a href={manuscript.file_path} className="text-blue-600" target="_blank" rel="noopener noreferrer">Download</a></p>
              )}
              {manuscript.submission_date && (
                <p><strong>Submitted on:</strong> {new Date(manuscript.submission_date).toLocaleString()}</p>
              )}

              {/* Author details only if available */}
              {(manuscript.author_name || manuscript.author_email || manuscript.author_designation || manuscript.author_organization || manuscript.author_mobile) && (
                <>
                  <h4 className="text-lg font-semibold mt-4">Author Details</h4>
                  {manuscript.author_name && (
                    <p><strong>Name:</strong> {manuscript.author_name}</p>
                  )}
                  {manuscript.author_email && (
                    <p><strong>Email:</strong> {manuscript.author_email}</p>
                  )}
                  {manuscript.author_designation && (
                    <p><strong>Designation:</strong> {manuscript.author_designation}</p>
                  )}
                  {manuscript.author_organization && (
                    <p><strong>Organization:</strong> {manuscript.author_organization}</p>
                  )}
                  {manuscript.author_mobile && (
                    <p><strong>Mobile:</strong> {manuscript.author_mobile}</p>
                  )}
                </>
              )}

              {/* Co-authors details only if available */}
              {manuscript.co_authors && manuscript.co_authors.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold mt-4">Co-Authors</h4>
                  <ul className="space-y-2">
                    {manuscript.co_authors.map((coAuthor, index) => (
                      <li key={index} className="border rounded-md p-2">
                        {coAuthor.name && (
                          <p><strong>Name:</strong> {coAuthor.name}</p>
                        )}
                        {coAuthor.email && (
                          <p><strong>Email:</strong> {coAuthor.email}</p>
                        )}
                        {coAuthor.designation && (
                          <p><strong>Designation:</strong> {coAuthor.designation}</p>
                        )}
                        {coAuthor.organization && (
                          <p><strong>Organization:</strong> {coAuthor.organization}</p>
                        )}
                        {coAuthor.mobile && (
                          <p><strong>Mobile:</strong> {coAuthor.mobile}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManuscriptDetailsComponent;
