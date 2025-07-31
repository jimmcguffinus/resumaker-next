'use client';

import React, { useState, useEffect, lazy, Suspense, Component, ReactNode } from 'react';
import { Download, Plus, Trash2, Moon, Sun, FileText, User, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import { PDFDownloadButton } from './PDFDownloadButton';

// Temporarily disable lazy loading to fix page loading issue
// const PDFDownloadButton = lazy(() => import('./PDFDownloadButton').then(module => ({ default: module.PDFDownloadButton })));

// Error boundary component to catch PDF generation errors
class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('PDF Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// TypeScript interfaces
interface ContactInfo {
  phone: string;
  email: string;
}

interface Location {
  city: string;
  state: string;
}

interface SoftwareJob {
  title: string;
  description: string;
  skills: string[];
  languages: string[];
}

interface Workplace {
  name: string;
  link: string;
  blurb: string;
  tenure: string;
  jobs: SoftwareJob[];
}

interface EducationRecord {
  institution: string;
  link: string;
  year: string;
  degree: string;
}

interface Resume {
  header: {
    name: string;
    tagline: string;
    contact: ContactInfo;
    location: Location;
  };
  experience: Workplace[];
  education: EducationRecord[];
  skills: string[];
  extras: string[];
}

// Default resume data structure
const defaultResume: Resume = {
  header: {
    name: "",
    tagline: "",
    contact: {
      phone: "",
      email: ""
    },
    location: {
      city: "",
      state: ""
    }
  },
  experience: [],
  education: [],
  skills: [],
  extras: []
};

const ResumeGenerator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('modern');
  const [aiResponse, setAiResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [resumeData, setResumeData] = useState<Resume>(defaultResume);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side after mounting
    setIsClient(true);
    
    const saved = localStorage.getItem('resume-data');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        // Only load if the data has the expected structure
        if (parsedData && parsedData.header && parsedData.experience && parsedData.education) {
          setResumeData(parsedData);
        }
      } catch (e) {
        console.error('Failed to load saved data:', e);
        // If parsing fails, keep the default data
      }
    }
    // If no saved data or invalid data, keep the default data
  }, []);

  useEffect(() => {
    localStorage.setItem('resume-data', JSON.stringify(resumeData));
  }, [resumeData]);

  // Debug: Log when resumeData changes
  useEffect(() => {
    console.log('resumeData changed:', resumeData);
    console.log('Experience count:', resumeData.experience?.length || 0);
    console.log('Education count:', resumeData.education?.length || 0);
  }, [resumeData]);

  const updateResumeData = (path: string, value: any) => {
    setResumeData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (key.includes('[') && key.includes(']')) {
          const [arrayKey, indexStr] = key.split('[');
          const index = parseInt(indexStr.replace(']', ''));
          if (!current[arrayKey]) current[arrayKey] = [];
          if (!current[arrayKey][index]) current[arrayKey][index] = {};
          current = current[arrayKey][index];
        } else {
          if (!current[key]) current[key] = {};
          current = current[key];
        }
      }
      
      const lastKey = keys[keys.length - 1];
      if (lastKey.includes('[') && lastKey.includes(']')) {
        const [arrayKey, indexStr] = lastKey.split('[');
        const index = parseInt(indexStr.replace(']', ''));
        if (!current[arrayKey]) current[arrayKey] = [];
        current[arrayKey][index] = value;
      } else {
        current[lastKey] = value;
      }
      
      return newData;
    });
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        name: '',
        link: '',
        blurb: '',
        tenure: '',
        jobs: [{
          title: '',
          description: '',
          skills: [],
          languages: []
        }]
      }]
    }));
  };

  const removeExperience = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        institution: '',
        link: '',
        year: '',
        degree: ''
      }]
    }));
  };

  const removeEducation = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  // React PDF export is handled by PDFDownloadLink component

  const exportToJSON = () => {
    const dataStr = JSON.stringify(resumeData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.json';
    link.click();
  };

  const exportToMarkdown = () => {
    let markdown = `# ${resumeData.header?.name || 'Your Name'}\n\n`;
    markdown += `*${resumeData.header?.tagline || 'Your Professional Title'}*\n\n`;
    
    // Contact Information with emojis
    markdown += `📧 ${resumeData.header?.contact?.email || ''}\n`;
    markdown += `📱 ${resumeData.header?.contact?.phone || ''}\n`;
    markdown += `📍 ${resumeData.header?.location?.city || ''}, ${resumeData.header?.location?.state || ''}\n\n`;
    
    // Experience
    if (resumeData.experience && resumeData.experience.length > 0) {
      markdown += `## 💼 Experience\n\n`;
      resumeData.experience.forEach((exp) => {
        markdown += `### ${exp.name}\n`;
        if (exp.jobs?.[0]?.title) {
          markdown += `**${exp.jobs[0].title}**\n`;
        }
        if (exp.tenure) {
          markdown += `*${exp.tenure}*\n\n`;
        }
        if (exp.jobs?.[0]?.description) {
          markdown += `${exp.jobs[0].description}\n\n`;
        }
        if (exp.jobs?.[0]?.skills && exp.jobs[0].skills.length > 0) {
          markdown += `**Skills:** ${exp.jobs[0].skills.join(', ')}\n\n`;
        }
      });
    }
    
    // Education
    if (resumeData.education && resumeData.education.length > 0) {
      markdown += `## 🎓 Education\n\n`;
      resumeData.education.forEach((edu) => {
        markdown += `### ${edu.institution}\n`;
        markdown += `**${edu.degree}**\n`;
        markdown += `*${edu.year}*\n\n`;
      });
    }
    
    // Skills
    if (resumeData.skills && resumeData.skills.length > 0) {
      markdown += `## ⚡ Skills\n\n`;
      markdown += `${resumeData.skills.join(', ')}\n\n`;
    }
    
    // Additional Information
    if (resumeData.extras && resumeData.extras.length > 0) {
      markdown += `## 🏆 Additional Information\n\n`;
      resumeData.extras.forEach((extra) => {
        markdown += `• ${extra}\n`;
      });
    }
    
    const dataBlob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.md';
    link.click();
  };

  const convertMarkdownToStyledHTML = (markdown: string) => {
    let html = `
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body {
              font-family: 'Inter', 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', 'Helvetica', 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 612px; /* 8.5 inches at 72 DPI */
              margin: 0 auto;
              padding: 40px;
              font-size: 12px;
              background-color: white;
            }
            h1 {
              color: #2563eb;
              font-size: 24px;
              margin-bottom: 10px;
              border-bottom: 2px solid #dbeafe;
              padding-bottom: 10px;
              font-weight: 700;
            }
            h2 {
              color: #2563eb;
              font-size: 18px;
              margin-top: 20px;
              margin-bottom: 12px;
              border-bottom: 1px solid #dbeafe;
              padding-bottom: 5px;
              font-weight: 600;
            }
            h3 {
              color: #1f2937;
              font-size: 14px;
              margin-top: 12px;
              margin-bottom: 4px;
              font-weight: 600;
            }
            p {
              margin: 6px 0;
              font-size: 12px;
            }
            .contact-info {
              display: flex;
              flex-wrap: wrap;
              gap: 15px;
              margin: 12px 0;
              font-size: 12px;
              color: #6b7280;
            }
            .contact-item {
              display: flex;
              align-items: center;
              gap: 4px;
              font-size: 12px;
            }
            .skill-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 6px;
              margin: 8px 0;
            }
            .skill-tag {
              background-color: #dbeafe;
              color: #1e40af;
              border-radius: 12px;
              padding: 4px 8px;
              font-size: 10px;
              font-weight: 500;
              display: inline-block;
            }
            .job-title {
              color: #2563eb;
              font-weight: 600;
              margin: 4px 0;
              font-size: 12px;
            }
            .job-duration {
              color: #6b7280;
              font-style: italic;
              margin: 4px 0;
              font-size: 11px;
            }
            .job-description {
              margin: 8px 0;
              color: #374151;
              font-size: 12px;
            }
            .education-item {
              margin: 12px 0;
              padding: 8px;
              background-color: #f9fafb;
              border-radius: 6px;
            }
            .education-degree {
              color: #2563eb;
              font-weight: 500;
              font-size: 12px;
            }
            .education-year {
              color: #6b7280;
              font-size: 11px;
            }
            ul {
              margin: 8px 0;
              padding-left: 16px;
            }
            li {
              margin: 4px 0;
              font-size: 12px;
            }
            /* Emoji support */
            .emoji {
              font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
              font-size: 14px;
              vertical-align: middle;
            }
          </style>
        </head>
        <body>
    `;

    // Convert markdown to HTML with custom styling
    let lines = markdown.split('\n');
    let inSkillsSection = false;
    let inExperienceSection = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!line) {
        html += '<br>';
        continue;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        html += `<h1>${line.substring(2)}</h1>`;
      } else if (line.startsWith('## ')) {
        const section = line.substring(3);
        html += `<h2>${section}</h2>`;
        inSkillsSection = section.includes('Skills');
        inExperienceSection = section.includes('Experience');
      } else if (line.startsWith('### ')) {
        html += `<h3>${line.substring(4)}</h3>`;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        // Job title
        const title = line.substring(2, line.length - 2);
        html += `<div class="job-title">${title}</div>`;
      } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        // Job duration
        const duration = line.substring(1, line.length - 1);
        html += `<div class="job-duration">${duration}</div>`;
      } else if (line.startsWith('📧') || line.startsWith('📱') || line.startsWith('📍')) {
        // Contact info with emojis
        if (i === lines.findIndex(l => l.startsWith('📧'))) {
          html += '<div class="contact-info">';
        }
        const emoji = line.substring(0, 2);
        const text = line.substring(2).trim();
        html += `<div class="contact-item"><span class="emoji">${emoji}</span>${text}</div>`;
        if (i === lines.findIndex(l => l.startsWith('📍')) || i === lines.length - 1) {
          html += '</div>';
        }
      } else if (line.startsWith('**Skills:**')) {
        // Skills section with oval tags
        const skillsText = line.substring(11).trim();
        const skills = skillsText.split(',').map(s => s.trim());
        html += '<div class="skill-tags">';
        skills.forEach(skill => {
          html += `<span class="skill-tag">${skill}</span>`;
        });
        html += '</div>';
      } else if (inSkillsSection && line.includes(',')) {
        // Skills list with oval tags
        const skills = line.split(',').map(s => s.trim());
        html += '<div class="skill-tags">';
        skills.forEach(skill => {
          html += `<span class="skill-tag">${skill}</span>`;
        });
        html += '</div>';
      } else if (line.startsWith('• ')) {
        // List items
        html += `<li>${line.substring(2)}</li>`;
      } else {
        // Regular paragraph
        html += `<p>${line}</p>`;
      }
    }

    html += `
        </body>
      </html>
    `;

    return html;
  };



  // Debug function to check current state
  const debugCurrentData = () => {
    console.log('Current resumeData:', resumeData);
    console.log('Experience length:', resumeData.experience?.length);
    console.log('Education length:', resumeData.education?.length);
    console.log('Skills length:', resumeData.skills?.length);
    console.log('Extras length:', resumeData.extras?.length);
  };

  // Hablo AI function - Force fresh deployment v2 (GET method)
  const handleHabloClick = async () => {
    setIsLoading(true);
    setAiResponse('');
    
    try {
      // Force fresh deployment - GET request to match API route
      const response = await fetch('/api/hablo');

      const data = await response.json();
      
      if (!response.ok || data.error) {
        throw new Error(data.error || 'An unknown error occurred.');
      }
      
      setAiResponse(data.message);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setAiResponse(`Error: ${errorMessage}`);
      console.error('Hablo error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Convert Scala format to Next.js format
  // This function will now correctly parse the detailed JSON from the original CLI tool
  const importJsonData = (jsonData: any): Resume => {
    const formatPhone = (p: any) => p ? `(${p.areaCode}) ${p.prefix}-${p.suffix}` : '';
    const formatEmail = (e: any) => e ? `${e.host}@${e.domain}` : '';
    const formatTenure = (t: any) => {
      if (!t || !t.start || !t.end) return '';
      const startYear = new Date(t.start).getFullYear();
      const endYear = new Date(t.end).getFullYear();
      return `${startYear} - ${endYear}`;
    };

    const experience = (jsonData.experience?.workplaces || []).map((workplace: any) => ({
      name: workplace.name || '',
      link: workplace.link || '',
      blurb: workplace.blurb || '',
      tenure: formatTenure(workplace.tenure),
      jobs: (workplace.jobs || []).map((job: any) => ({
        title: job.title || '',
        description: job.description || '',
        // Combine skills and languages into a single skills array for simplicity
        skills: [...(job.skillsAndTools || []), ...Object.keys(job.langsAndLibs || {})],
        languages: [], // This can be deprecated if skills now holds everything
      })),
    }));

    const education = (jsonData.education?.certifcations || []).map((edu: any) => ({
      institution: edu.instituion || '',
      link: edu.link || '',
      year: edu.awarded?.toString() || '',
      degree: edu.proof?.areaOfStudy || '',
    }));

    // Create a comprehensive, unique list of skills from all job entries
    const allSkills = new Set<string>();
    experience.forEach((exp: Workplace) => {
      exp.jobs.forEach((job: SoftwareJob) => {
        job.skills.forEach(skill => allSkills.add(skill));
      });
    });

    const extras = (jsonData.extras?.elements || []).map((el: any) =>
      (el.contentChunks || []).map((chunk: any) =>
        typeof chunk === 'string' ? chunk : chunk.text
      ).join('')
    );

    return {
      header: {
        name: jsonData.header?.name || '',
        tagline: jsonData.header?.tagline || '',
        contact: {
          phone: formatPhone(jsonData.header?.contactInfo?.phoneNumber),
          email: formatEmail(jsonData.header?.contactInfo?.email),
        },
        location: {
          city: jsonData.header?.location?.city || '',
          state: jsonData.header?.location?.state?.name || '',
        },
      },
      experience,
      education,
      skills: Array.from(allSkills),
      extras,
    };
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`border-b transition-colors ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Resume Generator
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={activeTemplate}
                onChange={(e) => setActiveTemplate(e.target.value)}
                className={`px-3 py-2 rounded-md border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
                <option value="minimal">Minimal</option>
              </select>

              <button
                onClick={() => {
                  // Create a file input for importing Scala data
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.accept = '.json';
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        try {
                          const jsonData = JSON.parse(e.target?.result as string);
                          const convertedData = importJsonData(jsonData);
                          setResumeData(convertedData);
                          alert('JSON data imported successfully!');
                        } catch (error) {
                          console.error("Failed to parse or convert JSON", error);
                          alert('Error processing file. Please ensure it\'s a valid resume JSON.');
                        }
                      };
                      reader.readAsText(file);
                    }
                  };
                  input.click();
                }}
                className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                title="Import JSON data from original CLI format"
              >
                Import JSON
              </button>
              <button
                onClick={exportToJSON}
                className="px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
              >
                Export JSON
              </button>
              <button
                onClick={exportToMarkdown}
                className="px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                Export Markdown
              </button>
              <button
                onClick={() => {
                  debugCurrentData();
                  alert('Check console for current data');
                }}
                className="px-4 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                title="Debug: Show current data in console"
              >
                Debug Data
              </button>
              <button
                onClick={handleHabloClick}
                disabled={isLoading}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isLoading 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
                title="Test AI Career Co-Pilot connection"
              >
                {isLoading ? 'Testing...' : 'Hablo!'}
              </button>
                              {isClient && (
                                <ErrorBoundary fallback={
                                  <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md">
                                    <span>PDF Error</span>
                                  </button>
                                }>
                                  <PDFDownloadButton resumeData={resumeData} />
                                </ErrorBoundary>
                              )}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-md transition-colors ${
                  darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* AI Response Display */}
      {aiResponse && (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ${
          darkMode ? 'bg-gray-800' : 'bg-blue-50'
        }`}>
          <div className={`p-4 rounded-lg border ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-blue-200 text-gray-900'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600">Career Co-Pilot Response:</span>
            </div>
            <p className="text-sm leading-relaxed">{aiResponse}</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className={`space-y-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold">Personal Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name
                  </label>
                  <input
                    value={resumeData.header.name}
                    onChange={(e) => updateResumeData('header.name', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Professional Title
                  </label>
                  <input
                    value={resumeData.header.tagline}
                    onChange={(e) => updateResumeData('header.tagline', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="e.g., Full Stack Developer"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={resumeData.header.contact.email}
                    onChange={(e) => updateResumeData('header.contact.email', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Phone
                  </label>
                  <input
                    value={resumeData.header.contact.phone}
                    onChange={(e) => updateResumeData('header.contact.phone', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    City
                  </label>
                  <input
                    value={resumeData.header.location.city}
                    onChange={(e) => updateResumeData('header.location.city', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="San Francisco"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    State
                  </label>
                  <input
                    value={resumeData.header.location.state}
                    onChange={(e) => updateResumeData('header.location.state', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="CA"
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Experience</h2>
                </div>
                <button
                  onClick={addExperience}
                  className="flex items-center space-x-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Experience</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Experience {index + 1}</h3>
                      <button
                        onClick={() => removeExperience(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      <input
                        value={exp.name}
                        onChange={(e) => updateResumeData(`experience[${index}].name`, e.target.value)}
                        placeholder="Company Name"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={exp.tenure}
                        onChange={(e) => updateResumeData(`experience[${index}].tenure`, e.target.value)}
                        placeholder="2020 - Present"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                    
                    <input
                      value={exp.jobs[0]?.title || ''}
                      onChange={(e) => updateResumeData(`experience[${index}].jobs[0].title`, e.target.value)}
                      placeholder="Job Title"
                      className={`w-full p-2 rounded border mb-3 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                    
                    <textarea
                      value={exp.jobs[0]?.description || ''}
                      onChange={(e) => updateResumeData(`experience[${index}].jobs[0].description`, e.target.value)}
                      rows={3}
                      placeholder="Job description and achievements..."
                      className={`w-full p-2 rounded border mb-3 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                    
                    <input
                      value={exp.jobs[0]?.skills?.join(', ') || ''}
                      onChange={(e) => updateResumeData(`experience[${index}].jobs[0].skills`, e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                      placeholder="Skills: React, Node.js, AWS..."
                      className={`w-full p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Education</h2>
                </div>
                <button
                  onClick={addEducation}
                  className="flex items-center space-x-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Education</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Education {index + 1}</h3>
                      <button
                        onClick={() => removeEducation(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        value={edu.institution}
                        onChange={(e) => updateResumeData(`education[${index}].institution`, e.target.value)}
                        placeholder="Institution Name"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={edu.year}
                        onChange={(e) => updateResumeData(`education[${index}].year`, e.target.value)}
                        placeholder="Graduation Year"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={edu.degree}
                        onChange={(e) => updateResumeData(`education[${index}].degree`, e.target.value)}
                        placeholder="Degree"
                        className={`p-2 rounded border md:col-span-2 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-5 w-5 text-blue-500" />
                <h2 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  ⚡ Skills
                </h2>
              </div>
              
              <textarea
                value={resumeData.skills.join(', ')}
                onChange={(e) => updateResumeData('skills', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                rows={3}
                placeholder="JavaScript, TypeScript, React, Node.js, Python..."
                className={`w-full p-3 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            {/* Extras Section */}
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-5 w-5 text-blue-500" />
                <h2 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  🏆 Additional Information
                </h2>
              </div>
              
              <textarea
                value={resumeData.extras.join('\n')}
                onChange={(e) => updateResumeData('extras', e.target.value.split('\n').filter(Boolean))}
                rows={4}
                placeholder="Awards, certifications, projects, or other achievements..."
                className={`w-full p-3 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="mb-4">
                <h2 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Live Preview
                </h2>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Template: {activeTemplate.charAt(0).toUpperCase() + activeTemplate.slice(1)}
                </div>
              </div>
              
              {/* Resume Preview */}
              <div id="resume-preview" className={`bg-white text-gray-900 p-8 rounded-lg shadow-lg min-h-[800px] ${
                activeTemplate === 'modern' ? 'border-l-4 border-blue-500' :
                activeTemplate === 'classic' ? 'border border-gray-300' :
                'shadow-none border border-gray-200'
              }`}>
                {/* Header */}
                <div className={`pb-6 mb-6 ${
                  activeTemplate === 'modern' ? 'border-b-2 border-blue-100' :
                  activeTemplate === 'classic' ? 'border-b border-gray-400' :
                  'border-b border-gray-200'
                }`}>
                  <h1 className={`text-3xl font-bold mb-3 ${
                    activeTemplate === 'modern' ? 'text-blue-600' :
                    activeTemplate === 'classic' ? 'text-gray-800' :
                    'text-gray-900'
                  }`}>
                    {resumeData.header?.name || 'Your Name'}
                  </h1>
                  <p className={`text-lg mb-4 italic ${
                    activeTemplate === 'modern' ? 'text-gray-600' :
                    'text-gray-700'
                  }`}>
                    {resumeData.header?.tagline || 'Your Professional Title'}
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <span className="mr-1">📧</span>
                      {resumeData.header?.contact?.email}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📱</span>
                      {resumeData.header?.contact?.phone}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📍</span>
                      {resumeData.header?.location?.city}, {resumeData.header?.location?.state}
                    </span>
                  </div>
                </div>

                {/* Experience */}
                {resumeData.experience && resumeData.experience.length > 0 && (
                  <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      💼 Experience
                    </h2>
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="mb-6 p-4 border-l-4 border-gray-200 bg-gray-50 rounded-r-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{exp.name}</h3>
                            {exp.jobs?.[0] && (
                              <p className="text-blue-600 font-semibold">{exp.jobs[0].title}</p>
                            )}
                          </div>
                          <span className="text-sm text-gray-500 font-medium bg-white px-2 py-1 rounded">
                            {exp.tenure}
                          </span>
                        </div>
                        {exp.jobs?.[0]?.description && (
                          <p className="text-gray-700 text-sm mb-3 leading-relaxed">{exp.jobs[0].description}</p>
                        )}
                        {exp.jobs?.[0]?.skills && exp.jobs[0].skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.jobs[0].skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                  activeTemplate === 'modern' ? 'bg-blue-100 text-blue-800' :
                                  activeTemplate === 'classic' ? 'bg-gray-200 text-gray-800' :
                                  'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Education */}
                {resumeData.education && resumeData.education.length > 0 && (
                  <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      🎓 Education
                    </h2>
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">{edu.institution}</h3>
                            <p className="text-blue-600 font-medium">{edu.degree}</p>
                          </div>
                          <span className="text-sm text-gray-500 font-medium bg-white px-3 py-1 rounded-full">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills */}
                {resumeData.skills && resumeData.skills.length > 0 && (
                  <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      ⚡ Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            activeTemplate === 'modern' ? 'bg-blue-100 text-blue-800' :
                            activeTemplate === 'classic' ? 'bg-gray-200 text-gray-800' :
                            'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Information */}
                {resumeData.extras && resumeData.extras.length > 0 && (
                  <div>
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      🏆 Additional Information
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {resumeData.extras.map((extra, index) => (
                        <li key={index} className="text-sm">{extra}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeGenerator; 