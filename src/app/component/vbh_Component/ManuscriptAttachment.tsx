"use client"; // This makes the component a client-side component

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // For client-side routing

interface ManuscriptAttachmentProps {
  onPrevious: () => void;
}

const ManuscriptAttachment: React.FC<ManuscriptAttachmentProps> = ({ onPrevious }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter(); // Hook for redirection

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const manuscriptId = localStorage.getItem('manuscriptId');
    const userId = localStorage.getItem('userId');

    if (!manuscriptId) {
      setError('Manuscript ID not found.');
      return;
    }

    if (!userId) {
      setError('User ID not found.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('manuscriptId', manuscriptId);
    formData.append('userId', userId);

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      await axios.post('https://vie-rase-backend.onrender.com/api/vbh_submit-manuscript-file', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccess('File uploaded and details submitted successfully! Redirecting to homepage...');
      
      setTimeout(() => {
        router.push('/'); // Redirect to homepage after 2 seconds
      }, 2000);
    } catch (err) {
      setError('An error occurred while uploading the manuscript file.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Manuscript Attachment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Manuscript</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}
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
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManuscriptAttachment;
