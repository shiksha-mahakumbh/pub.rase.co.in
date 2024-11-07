import React from 'react';
import { Button } from 'antd';

interface Document {
  title: string;
  filePath: string;
  fileType: 'pdf' | 'docx';
}

const documents: Document[] = [
  {
    title: 'Guidelines',
    filePath: '/Guidelines for Viksit India-Revised.docx',
    fileType: 'docx',
  },
  {
    title: 'New Special Issue',
    filePath: '/files/new_special_issue.docx',
    fileType: 'docx',
  },
];

const NewIssue: React.FC = () => {
  const handleReadClick = (doc: Document) => {
    if (doc.fileType === 'docx') {
      // Use Google Docs Viewer to open the DOCX file
      window.open(`https://docs.google.com/gview?url=${window.location.origin}${doc.filePath}&embedded=true`, '_blank');
    } else {
      window.open(doc.filePath, '_blank');
    }
  };

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 space-y-8">
      {documents.map((doc, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-xl font-medium text-gray-700 mb-4">{doc.title}</h2>
          <div className="flex space-x-4">
            <Button type="primary" onClick={() => handleReadClick(doc)}>
              Read file
            </Button>
            <Button
              type="default"
              href={doc.filePath}
              download={doc.filePath.split('/').pop()}
            >
              Download file
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewIssue;
