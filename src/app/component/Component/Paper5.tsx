import React from "react";
import data from "../../vbe.rase/output/Paper5.json"; // Adjust the path as needed

const renderContent = (data: any): JSX.Element[] => {
  const elements: JSX.Element[] = [];

  if (data.ArticleDetails) {
    elements.push(
      <div key="article-title" className="my-2">
        <h2 className="text-2xl font-bold mb-4">{data.ArticleDetails.Title}</h2>
      </div>
    );

    if (Array.isArray(data.ArticleDetails.Authors)) {
      elements.push(
        <div key="authors" className="my-2">
          <h3 className="text-xl font-semibold mb-2">Authors</h3>
          {data.ArticleDetails.Authors.map((author: any, index: number) => (
            <div key={`author-${index}`} className="mb-4">
              <p><strong>Name:</strong> {author.Name}</p>
              <p><strong>Designation:</strong> {author.Position}</p>
              <p><strong>Affiliation:</strong> {author.Affiliation}</p>
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
        <p><strong>Received:</strong> {data.ArticleInfo.Received}</p>
        <p><strong>Revised:</strong> {data.ArticleInfo.Revised}</p>
        <p><strong>Published:</strong> {data.ArticleInfo.Published}</p>
        <p><strong>Editor:</strong> {data.ArticleInfo.Editor}</p>
      </div>
    );
  }

  if (data.Abstract) {
    elements.push(
      <div key="abstract" className="my-2">
        <h3 className="text-xl font-semibold mb-2">Abstract</h3>
        <p>{data.Abstract}</p>
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
        <h3 className="text-xl font-semibold mb-2">Keywords</h3>
        <p>{data.Keywords}</p>
      </div>
    );
  }

  if (data.Introduction) {
    elements.push(
      <div key="introduction" className="my-2">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
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

  if (data.Conclusion) {
    elements.push(
      <div key="conclusion" className="my-2">
        <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
        <p>{data.Conclusion}</p>
      </div>
    );
  }

  if (data.Recommendations) {
    elements.push(
      <div key="recommendations" className="my-2">
        <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
        <p>{data.Recommendations}</p>
      </div>
    );
  }

  if (data.References) {
    elements.push(
      <div key="references" className="my-2">
        <h3 className="text-xl font-semibold mb-2">References</h3>
        <ul className="list-disc ml-5">
          {Object.entries(data.References).map(([key, ref]: [string, any]) => (
            <li key={key}>
              <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {ref.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return elements;
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
