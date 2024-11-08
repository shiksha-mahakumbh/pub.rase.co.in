"use client";
import React, { useState } from 'react';
import axios from 'axios';

const ManuscriptForm = () => {
  const [formData, setFormData] = useState({
    DOI: '',
    ArticleInfo: {
      Received: '',
      Revised: '',
      Published: '',
      Editor: '',
    },
    ArticleDetails: {
      Title: '',
      Email: '',
      Authors: [
        {
          Name: '',
          Position: '',
          Affiliation: '',
        },
      ],
      CoAuthors: [
        {
          Name: '',
          Position: '',
          Affiliation: '',
        },
      ],
    },
    Abstract: '',
    Keywords: '',
    Heading: [
      {
        Title: '',
        Content: '',
        SubHeadings: [
          {
            SubTitle: '',
            SubContent: '',
          },
        ],
      },
    ],
    Conclusion: '',
    Recommendations: '',
    Refrences: [
      {
        url: '',
        text: '',
      },
    ],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: string,
    field: string,
    index?: number,
    subIndex?: number
  ) => {
    if (section === 'References') {
      const updatedReferences = formData.Refrences.map((ref, i) =>
        i === index ? { ...ref, [field]: e.target.value } : ref
      );
      setFormData({ ...formData, Refrences: updatedReferences });
    }
      else if (section === 'ArticleInfo' || section === 'ArticleDetails') {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [field]: e.target.value },
      });
    } else if (section === 'Authors' || section === 'CoAuthors') {
      const updatedPeople = formData.ArticleDetails[section].map((person, i) =>
        i === index ? { ...person, [field]: e.target.value } : person
      );
      setFormData({
        ...formData,
        ArticleDetails: { ...formData.ArticleDetails, [section]: updatedPeople },
      });
    } else if (section === 'Heading') {
      const updatedHeadings = formData.Heading.map((heading, i) => {
        if (i === index) {
          return subIndex === undefined
            ? { ...heading, [field]: e.target.value }
            : {
                ...heading,
                SubHeadings: heading.SubHeadings.map((subHeading, sIdx) =>
                  sIdx === subIndex
                    ? { ...subHeading, [field]: e.target.value }
                    : subHeading
                ),
              };
        }
        return heading;
      });
      setFormData({ ...formData, Heading: updatedHeadings });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleAddAuthor = () => {
    setFormData({
      ...formData,
      ArticleDetails: {
        ...formData.ArticleDetails,
        Authors: [
          ...formData.ArticleDetails.Authors,
          { Name: '', Position: '', Affiliation: '' },
        ],
      },
    });
  };

  const handleRemoveAuthor = (index: number) => {
    setFormData({
      ...formData,
      ArticleDetails: {
        ...formData.ArticleDetails,
        Authors: formData.ArticleDetails.Authors.filter((_, i) => i !== index),
      },
    });
  };

  const handleAddCoAuthor = () => {
    setFormData({
      ...formData,
      ArticleDetails: {
        ...formData.ArticleDetails,
        CoAuthors: [
          ...formData.ArticleDetails.CoAuthors,
          { Name: '', Position: '', Affiliation: '' },
        ],
      },
    });
  };

  const handleRemoveCoAuthor = (index: number) => {
    setFormData({
      ...formData,
      ArticleDetails: {
        ...formData.ArticleDetails,
        CoAuthors: formData.ArticleDetails.CoAuthors.filter((_, i) => i !== index),
      },
    });
  };

  const handleAddHeading = () => {
    setFormData({
      ...formData,
      Heading: [
        ...formData.Heading,
        { Title: '', Content: '', SubHeadings: [{ SubTitle: '', SubContent: '' }] },
      ],
    });
  };

  const handleRemoveHeading = (index: number) => {
    setFormData({
      ...formData,
      Heading: formData.Heading.filter((_, i) => i !== index),
    });
  };

  const handleAddSubHeading = (index: number) => {
    const updatedHeadings = formData.Heading.map((heading, i) =>
      i === index
        ? {
            ...heading,
            SubHeadings: [...heading.SubHeadings, { SubTitle: '', SubContent: '' }],
          }
        : heading
    );
    setFormData({ ...formData, Heading: updatedHeadings });
  };

  const handleRemoveSubHeading = (headingIndex: number, subIndex: number) => {
    const updatedHeadings = formData.Heading.map((heading, i) =>
      i === headingIndex
        ? {
            ...heading,
            SubHeadings: heading.SubHeadings.filter((_, sIdx) => sIdx !== subIndex),
          }
        : heading
    );
    setFormData({ ...formData, Heading: updatedHeadings });
  };

  const handleAddReference = () => {
    setFormData({
      ...formData,
      Refrences: [...formData.Refrences, { url: '', text: '' }],
    });
  };

  const handleRemoveReference = (index: number) => {
    setFormData({
      ...formData,
      Refrences: formData.Refrences.filter((_, i) => i !== index),
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      // Send a POST request to your backend with the form data
      const response = await axios.post('https://vie-rase-backend.onrender.com//api/vbh_add-article', formData);
  
      // Handle success (you can update the UI or show a success message)
      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully!');
      
      // Optionally, reset the form data only on success
      setFormData({
        DOI: '',
        ArticleInfo: {
          Received: '',
          Revised: '',
          Published: '',
          Editor: '',
        },
        ArticleDetails: {
          Title: '',
          Email: '',
          Authors: [
            {
              Name: '',
              Position: '',
              Affiliation: '',
            },
          ],
          CoAuthors: [
            {
              Name: '',
              Position: '',
              Affiliation: '',
            },
          ],
        },
        Abstract: '',
        Keywords: '',
        Heading: [
          {
            Title: '',
            Content: '',
            SubHeadings: [
              {
                SubTitle: '',
                SubContent: '',
              },
            ],
          },
        ],
        Conclusion: '',
        Recommendations: '',
        Refrences: [
          {
            url: '',
            text: '',
          },
        ],
      });
    } catch (error) {
      // Handle error (show an error message, log it, etc.)
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form.');
      
      // Don't reset the form data if an error occurs, so the user doesn't lose the entered data.
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Article Submission Form</h1>

      <form onSubmit={handleSubmit}>
        {/* DOI Field */}
        <label htmlFor="DOI" className="block text-sm font-medium text-gray-700 mb-1">
          DOI
        </label>
        <input
          type="text"
          id="DOI"
          name="DOI"
          value={formData.DOI}
          onChange={(e) => handleInputChange(e, '', 'DOI')}
          placeholder="DOI"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        {/* Article Info Fields */}
        <h2 className="text-xl font-semibold mb-2">Article Information</h2>
        <label htmlFor="Received" className="block text-sm font-medium text-gray-700 mb-1">
          Received Date
        </label>
        <input
          type="text"
          id="Received"
          name="Received"
          value={formData.ArticleInfo.Received}
          onChange={(e) => handleInputChange(e, 'ArticleInfo', 'Received')}
          placeholder="Received Date"
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <label htmlFor="Revised" className="block text-sm font-medium text-gray-700 mb-1">
          Revised Date
        </label>
        <input
          type="text"
          id="Revised"
          name="Revised"
          value={formData.ArticleInfo.Revised}
          onChange={(e) => handleInputChange(e, 'ArticleInfo', 'Revised')}
          placeholder="Revised Date"
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <label htmlFor="Published" className="block text-sm font-medium text-gray-700 mb-1">
          Published Date
        </label>
        <input
          type="text"
          id="Published"
          name="Published"
          value={formData.ArticleInfo.Published}
          onChange={(e) => handleInputChange(e, 'ArticleInfo', 'Published')}
          placeholder="Published Date"
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <label htmlFor="Editor" className="block text-sm font-medium text-gray-700 mb-1">
          Editor
        </label>
        <input
          type="text"
          id="Editor"
          name="Editor"
          value={formData.ArticleInfo.Editor}
          onChange={(e) => handleInputChange(e, 'ArticleInfo', 'Editor')}
          placeholder="Editor"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        {/* Article Details */}
        <h2 className="text-xl font-semibold mb-2">Article Details</h2>
        <label htmlFor="Title" className="block text-sm font-medium text-gray-700 mb-1">
          Article Title
        </label>
        <input
          type="text"
          id="Title"
          name="Title"
          value={formData.ArticleDetails.Title}
          onChange={(e) => handleInputChange(e, 'ArticleDetails', 'Title')}
          placeholder="Article Title"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="Email"
          name="Email"
          value={formData.ArticleDetails.Email}
          onChange={(e) => handleInputChange(e, 'ArticleDetails', 'Email')}
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        {/* Authors Section */}
        <h3 className="text-lg font-medium mb-2">Authors</h3>
        {formData.ArticleDetails.Authors.map((author, index) => (
          <div key={index} className="mb-4 border p-4 rounded-md border-gray-300">
            <label htmlFor={`AuthorName${index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Author Name
            </label>
            <input
              type="text"
              id={`AuthorName${index}`}
              name="Name"
              value={author.Name}
              onChange={(e) => handleInputChange(e, 'Authors', 'Name', index)}
              placeholder="Author Name"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <label htmlFor={`AuthorPosition${index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              id={`AuthorPosition${index}`}
              name="Position"
              value={author.Position}
              onChange={(e) => handleInputChange(e, 'Authors', 'Position', index)}
              placeholder="Position"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <label htmlFor={`AuthorAffiliation${index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Affiliation
            </label>
            <input
              type="text"
              id={`AuthorAffiliation${index}`}
              name="Affiliation"
              value={author.Affiliation}
              onChange={(e) => handleInputChange(e, 'Authors', 'Affiliation', index)}
              placeholder="Affiliation"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <button
              type="button"
              onClick={() => handleRemoveAuthor(index)}
              className="text-red-500 underline mt-2"
            >
              Remove Author
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddAuthor}
          className="text-blue-500 underline mb-4"
        >
          Add Author
        </button>

        {/* Co-authors Section */}
        <h3 className="text-lg font-medium mt-4 mb-2">Co-authors</h3>
        {formData.ArticleDetails.CoAuthors.map((coAuthor, index) => (
          <div key={index} className="mb-4 border p-4 rounded-md border-gray-300">
            <label htmlFor={`CoAuthorName${index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Co-author Name
            </label>
            <input
              type="text"
              id={`CoAuthorName${index}`}
              name="Name"
              value={coAuthor.Name}
              onChange={(e) => handleInputChange(e, 'CoAuthors', 'Name', index)}
              placeholder="Co-author Name"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <label htmlFor={`CoAuthorPosition${index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              id={`CoAuthorPosition${index}`}
              name="Position"
              value={coAuthor.Position}
              onChange={(e) => handleInputChange(e, 'CoAuthors', 'Position', index)}
              placeholder="Position"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <label htmlFor={`CoAuthorAffiliation${index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Affiliation
            </label>
            <input
              type="text"
              id={`CoAuthorAffiliation${index}`}
              name="Affiliation"
              value={coAuthor.Affiliation}
              onChange={(e) => handleInputChange(e, 'CoAuthors', 'Affiliation', index)}
              placeholder="Affiliation"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <button
              type="button"
              onClick={() => handleRemoveCoAuthor(index)}
              className="text-red-500 underline mt-2"
            >
              Remove Co-author
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddCoAuthor}
          className="text-blue-500 underline mb-4"
        >
          Add Co-author
        </button>

        {/* Abstract */}
        <label htmlFor="Abstract" className="block text-sm font-medium text-gray-700 mb-1">
          Abstract
        </label>
        <textarea
          id="Abstract"
          name="Abstract"
          value={formData.Abstract}
          onChange={(e) => handleInputChange(e, '', 'Abstract')}
          placeholder="Abstract"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        {/* Keywords */}
        <label htmlFor="Keywords" className="block text-sm font-medium text-gray-700 mb-1">
          Keywords (comma-separated)
        </label>
        <input
          type="text"
          id="Keywords"
          name="Keywords"
          value={formData.Keywords}
          onChange={(e) => handleInputChange(e, '', 'Keywords')}
          placeholder="Keywords (comma-separated)"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        {/* Heading Section */}
        <h2 className="text-xl font-semibold mb-2">Headings</h2>
        {formData.Heading.map((heading, index) => (
          <div key={index} className="mb-4 border p-4 rounded-md border-gray-300">
            <label htmlFor={`HeadingTitle${index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Heading Title
            </label>
            <input
              type="text"
              id={`HeadingTitle${index}`}
              name="Title"
              value={heading.Title}
              onChange={(e) => handleInputChange(e, 'Heading', 'Title', index)}
              placeholder="Heading Title"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <label htmlFor={`HeadingContent${index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Heading Content
            </label>
            <textarea
              id={`HeadingContent${index}`}
              name="Content"
              value={heading.Content}
              onChange={(e) => handleInputChange(e, 'Heading', 'Content', index)}
              placeholder="Heading Content"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />

            {/* Subheading Section */}
            {heading.SubHeadings.map((subHeading, subIndex) => (
              <div key={subIndex} className="ml-4 mb-4 border p-4 rounded-md border-gray-300">
                <label htmlFor={`SubHeadingTitle${index}-${subIndex}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Subheading Title
                </label>
                <input
                  type="text"
                  id={`SubHeadingTitle${index}-${subIndex}`}
                  name="SubTitle"
                  value={subHeading.SubTitle}
                  onChange={(e) => handleInputChange(e, 'Heading', 'SubTitle', index, subIndex)}
                  placeholder="Subheading Title"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <label htmlFor={`SubHeadingContent${index}-${subIndex}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Subheading Content
                </label>
                <textarea
                  id={`SubHeadingContent${index}-${subIndex}`}
                  name="SubContent"
                  value={subHeading.SubContent}
                  onChange={(e) => handleInputChange(e, 'Heading', 'SubContent', index, subIndex)}
                  placeholder="Subheading Content"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveSubHeading(index, subIndex)}
                  className="text-red-500 underline mt-2"
                >
                  Remove Subheading
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => handleAddSubHeading(index)}
              className="text-blue-500 underline mt-2"
            >
              Add Subheading
            </button>
            <button
              type="button"
              onClick={() => handleRemoveHeading(index)}
              className="text-red-500 underline mt-2"
            >
              Remove Heading
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddHeading}
          className="text-blue-500 underline mb-4"
        >
          Add Heading
        </button>

        {/* Conclusion */}
        <label htmlFor="Conclusion" className="block text-sm font-medium text-gray-700 mb-1">
          Conclusion
        </label>
        <textarea
          id="Conclusion"
          name="Conclusion"
          value={formData.Conclusion}
          onChange={(e) => handleInputChange(e, '', 'Conclusion')}
          placeholder="Conclusion"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        {/* Recommendations */}
        <label htmlFor="Recommendations" className="block text-sm font-medium text-gray-700 mb-1">
          Recommendations
        </label>
        <textarea
          id="Recommendations"
          name="Recommendations"
          value={formData.Recommendations}
          onChange={(e) => handleInputChange(e, '', 'Recommendations')}
          placeholder="Recommendations"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">References</h2>
          <div className="mb-4 border p-4 rounded-md border-gray-300">
            {formData.Refrences.map((refrence, index) => (
              <div key={index} className="mb-2">
                <label htmlFor={`ReferenceText${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Reference Text
                </label>
                <input
                  type="text"
                  id={`ReferenceText${index}`}
                  value={refrence.text}
                  onChange={(e) => handleInputChange(e, 'References', 'text', index)}
                  placeholder="Reference Text"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <label htmlFor={`ReferenceUrl${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Reference URL
                </label>
                <input
                  type="url"
                  id={`ReferenceUrl${index}`}
                  value={refrence.url}
                  onChange={(e) => handleInputChange(e, 'References', 'url', index)}
                  placeholder="Reference URL"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveReference(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddReference}
              className="text-blue-500 hover:text-blue-700"
            >
              Add Another Reference
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManuscriptForm;
