// src/app/components/DocumentViewer.tsx
import React from "react";

interface DocumentViewerProps {
  content: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ content }) => {
  return (
    <div className="document-viewer">
      <iframe src={content} width="100%" height="600px" title="Document Viewer"></iframe>
    </div>
  );
};

export default DocumentViewer;
