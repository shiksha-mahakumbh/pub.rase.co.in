import React from "react";
import data from "../../vbh.rase/output/Paper1.json"; // Adjust the path as needed

const renderContent = (data: any): JSX.Element[] => {
  const elements: JSX.Element[] = [];

  if (data.ArticleDetails) {
    elements.push(
      <div key="article-title" className="my-2">
        <h2 className="text-2xl font-bold mb-4">{data.ArticleDetails.Title}</h2>
      </div>
    );

    if (data.ArticleDetails.Authors) {
      elements.push(
        <div key="authors" className="my-2">
          <h3 className="text-xl font-semibold mb-2">Authors</h3>
          {data.ArticleDetails.Authors.map((Authors: any, index: number) => (
            <div key={`author-${index}`} className="mb-4">
              <p><strong>Name:</strong> {Authors.Name}</p>
              <p><strong>Designation:</strong> {Authors.Position}</p>
              <p><strong>Affiliation:</strong>  {Authors.Affiliation}</p>
            </div>
          ))}
          <p><strong>Email:</strong> {data.ArticleDetails.Email}</p>
        </div>
      );
    }
  }

  if (data.DOI) {
    elements.push(
      <div key="doi" className="my-2">
        <p><strong>DOI:</strong> {data.DOI}</p>
      </div>
    );
  }

  if (data.ArticleInfo) {
    elements.push(
      <div key="article-info" className="my-2">
        <h3 className="text-xl font-semibold mb-2">Article Info</h3>
        <p><strong>प्राप्त:</strong> {data.ArticleInfo.प्राप्त}</p>
        <p><strong>संशोधित:</strong> {data.ArticleInfo.संशोधित}</p>
        <p><strong>प्रकाशित:</strong> {data.ArticleInfo.प्रकाशित}</p>
        <p><strong>संपादक:</strong> {data.ArticleInfo.संपादक}</p>
      </div>
    );
  }

  if (data.सारांश) {
    elements.push(
      <div key="abstract" className="my-2">
        <h3 className="text-xl font-semibold mb-2">सारांश</h3>
        <p>{data.सारांश}</p>
      </div>
    );
  }

  if (data.Highlights) {
    elements.push(
      <div key="highlights" className="my-2">
        <h3 className="text-xl font-semibold mb-2">Highlights</h3>
        <ul className="list-disc ml-5">
          {data.Highlights.map((highlight: string, index: number) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (data.Keywords) {
    elements.push(
      <div key="keywords" className="my-2">
        <h3 className="text-xl font-semibold mb-2">कूट शब्द</h3>
        <p>{data.Keywords}</p>
      </div>
    );
  }

  if (data.Introduction) {
    elements.push(
      <div key="introduction" className="my-2">
        <h3 className="text-xl font-semibold mb-2">परिचय</h3>
        <p>{data.Introduction}</p>
      </div>
    );
  }

  if (data.Heading) {
    Object.entries(data.Heading).forEach(([key, heading]: [string, any]) => {
      elements.push(
        <div key={key} className="my-2">
          <h3 className="text-xl font-semibold mb-2">{heading.Title}</h3>
          <p>{heading.Content}</p>
          {heading["Sub-Headings"] && heading["Sub-Headings"].map((subHeading: any, index: number) => (
            <div key={`sub-heading-${index}`} className="mb-4">
              <p><strong>{subHeading.Title}</strong></p>
              <p>{subHeading.Content}</p>
            </div>
          ))}
        </div>
      );
    });
  }

  if (data.परिणाम) {
    elements.push(
      <div key="conclusion" className="my-2">
        <h3 className="text-xl font-semibold mb-2">निष्कर्ष और परिणाम</h3>
        <p>{data.परिणाम}</p>
      </div>
    );
  }

  if (data.सिफ़ारिश) {
    elements.push(
      <div key="recommendations" className="my-2">
        <h3 className="text-xl font-semibold mb-2">निष्कर्ष और सिफ़ारिश</h3>
        <p>{data.सिफ़ारिश}</p>
      </div>
    );
  }

  // Convert object to array for references
  if (data.संदर्भ) {
    elements.push(
      <div key="references" className="my-2">
        <h3 className="text-xl font-semibold mb-2">References</h3>
        <ul className="list-disc ml-5">
          {Object.entries(data.संदर्भ).map(([key, ref]: [string, any]) => (
            <li key={key}>
              <a href={ref.Link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {ref.Title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  } return elements;
};

const HtmlPage = () => {
  const textElements = renderContent(data);

  return (
    <div className="p-6 bg-white min-h-screen overflow-x-hidden">
      {textElements.length > 0 ? textElements : <div className="text-lg text-gray-500">No text content found</div>}
    </div>
  );
};

export default HtmlPage;
