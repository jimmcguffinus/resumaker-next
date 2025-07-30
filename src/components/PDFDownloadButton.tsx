'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface PDFDownloadButtonProps {
  resumeData: any;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ resumeData }) => {
  const handleDownload = () => {
    // TODO: Implement PDF download functionality
    alert('PDF download functionality coming soon!');
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      <Download className="h-4 w-4" />
      <span>Export PDF (Coming Soon)</span>
    </button>
  );
}; 