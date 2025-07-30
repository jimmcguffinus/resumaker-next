'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from './ResumeDocument';

interface PDFDownloadButtonProps {
  resumeData: any;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ resumeData }) => {
  return (
    <PDFDownloadLink
      document={<ResumeDocument data={resumeData} />}
      fileName="resume.pdf"
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      {({ blob, url, loading, error }) =>
        loading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Generating PDF...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export PDF</span>
          </div>
        )
      }
    </PDFDownloadLink>
  );
}; 