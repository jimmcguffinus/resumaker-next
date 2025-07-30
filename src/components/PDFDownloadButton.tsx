'use client';

import React, { useRef } from 'react';
import { Download } from 'lucide-react';

interface PDFDownloadButtonProps {
  resumeData: any;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ resumeData }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!printRef.current) return;

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download PDF');
      return;
    }

    // Generate the resume HTML
    const resumeHTML = generateResumeHTML(resumeData);

    // Write the HTML to the new window
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - ${resumeData.header?.name || 'Your Name'}</title>
          <style>
            @media print {
              body { margin: 0; padding: 20px; }
              .resume { max-width: 8.5in; margin: 0 auto; }
            }
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .header { margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px; }
            .name { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
            .tagline { font-size: 16px; color: #666; margin-bottom: 10px; }
            .contact-info { margin-bottom: 15px; }
            .contact-item { margin: 2px 0; }
            .section { margin-bottom: 20px; }
            .section-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #ccc; }
            .experience-item { margin-bottom: 15px; }
            .job-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .job-title { font-weight: bold; }
            .company-name { font-weight: bold; color: #333; }
            .job-duration { color: #666; font-style: italic; }
            .job-description { margin-top: 5px; }
            .skills-container { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px; }
            .skill-tag { background: #f0f0f0; padding: 2px 8px; border-radius: 3px; font-size: 12px; }
            .education-item { margin-bottom: 10px; }
            .education-header { display: flex; justify-content: space-between; margin-bottom: 3px; }
            .institution-name { font-weight: bold; }
            .education-year { color: #666; }
            .degree-info { font-style: italic; }
            .extras-item { margin: 2px 0; }
          </style>
        </head>
        <body>
          <div class="resume">
            ${resumeHTML}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();

    // Wait for content to load, then print
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  const generateResumeHTML = (data: any) => {
    return `
      <div class="header">
        <div class="name">${data.header?.name || 'Your Name'}</div>
        <div class="tagline">${data.header?.tagline || 'Your Professional Title'}</div>
        <div class="contact-info">
          ${data.header?.contact?.email ? `<div class="contact-item">📧 ${data.header.contact.email}</div>` : ''}
          ${data.header?.contact?.phone ? `<div class="contact-item">📱 ${data.header.contact.phone}</div>` : ''}
          ${(data.header?.location?.city || data.header?.location?.state) ? 
            `<div class="contact-item">📍 ${[data.header.location.city, data.header.location.state].filter(Boolean).join(', ')}</div>` : ''}
        </div>
      </div>

      ${data.experience && data.experience.length > 0 ? `
        <div class="section">
          <div class="section-title">💼 Experience</div>
          ${data.experience.map((exp: any) => `
            <div class="experience-item">
              <div class="job-header">
                <div class="company-name">${exp.name}</div>
                ${exp.tenure ? `<div class="job-duration">${exp.tenure}</div>` : ''}
              </div>
              ${exp.jobs ? exp.jobs.map((job: any) => `
                <div>
                  <div class="job-title">${job.title}</div>
                  ${job.description ? `<div class="job-description">${job.description}</div>` : ''}
                  ${(job.skills?.length > 0 || job.languages?.length > 0) ? `
                    <div class="skills-container">
                      ${job.skills?.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('') || ''}
                      ${job.languages?.map((lang: string) => `<span class="skill-tag">${lang}</span>`).join('') || ''}
                    </div>
                  ` : ''}
                </div>
              `).join('') : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${data.education && data.education.length > 0 ? `
        <div class="section">
          <div class="section-title">🎓 Education</div>
          ${data.education.map((edu: any) => `
            <div class="education-item">
              <div class="education-header">
                <div class="institution-name">${edu.institution}</div>
                ${edu.year ? `<div class="education-year">${edu.year}</div>` : ''}
              </div>
              ${edu.degree ? `<div class="degree-info">${edu.degree}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${data.skills && data.skills.length > 0 ? `
        <div class="section">
          <div class="section-title">⚡ Skills</div>
          <div class="skills-container">
            ${data.skills.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${data.extras && data.extras.length > 0 ? `
        <div class="section">
          <div class="section-title">🏆 Additional Information</div>
          ${data.extras.map((extra: string) => `<div class="extras-item">• ${extra}</div>`).join('')}
        </div>
      ` : ''}
    `;
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      <Download className="h-4 w-4" />
      <span>Export PDF</span>
    </button>
  );
}; 