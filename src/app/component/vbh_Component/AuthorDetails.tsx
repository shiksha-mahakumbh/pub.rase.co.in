import React, { useState } from 'react';
import axios from 'axios';

interface CoAuthor {
  name: string;
  email: string;
  designation: string;
  organization: string;
  mobile: string;
}

interface AuthorDetailsProps {
  onNext: () => void;
  onPrevious: () => void;
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({ onNext, onPrevious }) => {
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [authorDesignation, setAuthorDesignation] = useState('');
  const [authorOrganization, setAuthorOrganization] = useState('');
  const [authorMobile, setAuthorMobile] = useState('');
  const [coAuthors, setCoAuthors] = useState<CoAuthor[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddCoAuthor = () => {
    setCoAuthors([...coAuthors, {
      name: '',
      email: '',
      designation: '',
      organization: '',
      mobile: ''
    }]);
  };

  const handleRemoveCoAuthor = (index: number) => {
    setCoAuthors(coAuthors.filter((_, i) => i !== index));
  };

  const handleCoAuthorChange = (index: number, field: keyof CoAuthor, value: string) => {
    const newCoAuthors = [...coAuthors];
    newCoAuthors[index] = { ...newCoAuthors[index], [field]: value };
    setCoAuthors(newCoAuthors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
  
    if (!userId) {
      setError('User ID not found.');
      return;
    }
  
    console.log('Submitting with userId:', userId); // Debugging line
  
    try {
      setLoading(true);
      setError(null);
  
      const response = await axios.post('https://vie-rase-backend.onrender.com/api/vbh_submit-author-details', {
        author_name: authorName,
        author_email: authorEmail,
        author_designation: authorDesignation,
        author_organization: authorOrganization,
        author_mobile: authorMobile,
        co_authors: coAuthors,
        user_id: userId // Include user ID in the submission payload
      });
  
      const { manuscriptId } = response.data;
  
      localStorage.setItem('manuscriptId', manuscriptId);
  
      onNext();
    } catch (err) {
      console.error('Error:', err); // Debugging line
      setError('An error occurred while submitting author details.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Author Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Author Name</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Designation</label>
          <input
            type="text"
            value={authorDesignation}
            onChange={(e) => setAuthorDesignation(e.target.value)}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your designation"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Organization</label>
          <input
            type="text"
            value={authorOrganization}
            onChange={(e) => setAuthorOrganization(e.target.value)}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your organization"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            value={authorMobile}
            onChange={(e) => setAuthorMobile(e.target.value)}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your mobile number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Co-Authors</label>
          {coAuthors.map((coAuthor, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-md mb-4 bg-white shadow-sm relative">
              <h3 className="text-lg font-semibold mb-2">Co-Author {index + 1}</h3>
              <button
                type="button"
                onClick={() => handleRemoveCoAuthor(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                aria-label="Remove Co-Author"
              >
                &times;
              </button>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={coAuthor.name}
                    onChange={(e) => handleCoAuthorChange(index, 'name', e.target.value)}
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter co-author's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={coAuthor.email}
                    onChange={(e) => handleCoAuthorChange(index, 'email', e.target.value)}
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter co-author's email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Designation</label>
                  <input
                    type="text"
                    value={coAuthor.designation}
                    onChange={(e) => handleCoAuthorChange(index, 'designation', e.target.value)}
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter co-author's designation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Organization</label>
                  <input
                    type="text"
                    value={coAuthor.organization}
                    onChange={(e) => handleCoAuthorChange(index, 'organization', e.target.value)}
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter co-author's organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    type="text"
                    value={coAuthor.mobile}
                    onChange={(e) => handleCoAuthorChange(index, 'mobile', e.target.value)}
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter co-author's mobile number"
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddCoAuthor}
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Co-Author
          </button>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Previous
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? 'Submitting...' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthorDetails;
