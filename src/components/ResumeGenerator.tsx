'use client';

import React, { useState, useEffect, lazy, Suspense, Component, ReactNode } from 'react';
import { Download, Plus, Trash2, Moon, Sun, FileText, User, Briefcase, GraduationCap, Code, Award, Pencil } from 'lucide-react';
import { PDFDownloadButton } from './PDFDownloadButton';
import PersonaSelector from './PersonaSelector';

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
  const [selectedPersona, setSelectedPersona] = useState('default');
  const [personas, setPersonas] = useState<Record<string, any>>({});
  const [showAddExperienceModal, setShowAddExperienceModal] = useState(false);
  const [editingExperienceIndex, setEditingExperienceIndex] = useState<number | null>(null);
  const [editingEducationIndex, setEditingEducationIndex] = useState<number | null>(null);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [isEditingExtras, setIsEditingExtras] = useState(false);
  const [newExperience, setNewExperience] = useState<Workplace>({
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
  });
  const [newEducation, setNewEducation] = useState<EducationRecord>({
    institution: '',
    link: '',
    year: '',
    degree: ''
  });
  const [newExtras, setNewExtras] = useState<string>('');

  // Job posting modal state
  const [showJobPostingModal, setShowJobPostingModal] = useState(false);
  const [jobPostingText, setJobPostingText] = useState('');
  const [isProcessingJobPosting, setIsProcessingJobPosting] = useState(false);

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

  // Load personas from the API
  useEffect(() => {
    fetch('/api/personas')
      .then(res => res.json())
      .then(data => {
        setPersonas(data.personas);
      })
      .catch(error => {
        console.error('Error loading personas:', error);
      });
  }, []);

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
    setShowAddExperienceModal(true);
    setEditingExperienceIndex(null); // Clear editing index for new experience
    setNewExperience({
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
    });
  };

  const saveNewExperience = () => {
    if (editingExperienceIndex !== null) {
      setResumeData(prev => ({
        ...prev,
        experience: prev.experience.map((exp, index) => 
          index === editingExperienceIndex ? newExperience : exp
        )
      }));
      setEditingExperienceIndex(null);
    } else {
      setResumeData(prev => ({
        ...prev,
        experience: [...prev.experience, newExperience]
      }));
    }
    setShowAddExperienceModal(false);
  };

  const cancelAddExperience = () => {
    setShowAddExperienceModal(false);
    setEditingExperienceIndex(null);
    setEditingEducationIndex(null);
    setIsEditingSkills(false);
    setIsEditingExtras(false);
    setNewExperience({
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
    });
    setNewEducation({
      institution: '',
      link: '',
      year: '',
      degree: ''
    });
    setNewExtras('');
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

  // Hablo AI function - Enhanced to send resume data and receive enhanced content
  const handleHabloClick = async () => {
    setIsLoading(true);
    setAiResponse('');
    
    try {
      // Send resume data via POST to get enhanced content
      const url = selectedPersona === 'default' 
        ? '/api/hablo' 
        : `/api/hablo?persona=${selectedPersona}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resumeData),
      });

      const data = await response.json();
      
      if (!response.ok || data.error) {
        throw new Error(data.error || 'An unknown error occurred.');
      }
      
      // If we got enhanced resume data, update the form
      if (data.enhancedResume) {
        setResumeData(data.enhancedResume);
        setAiResponse(`✅ Resume enhanced with ${selectedPersona} personality! Your content has been updated.`);
      } else if (data.message) {
        // Fallback to chat message for GET requests
        setAiResponse(data.message);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setAiResponse(`Error: ${errorMessage}`);
      console.error('Hablo error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // AI Enhancement for individual experience entries
  const enhanceExperience = async (experienceIndex: number) => {
    setIsLoading(true);
    setAiResponse('');
    
    try {
      const experience = resumeData.experience[experienceIndex];
      if (!experience) {
        throw new Error('Experience not found');
      }

      // Send just this experience to AI for enhancement
      const url = selectedPersona === 'default' 
        ? '/api/hablo' 
        : `/api/hablo?persona=${selectedPersona}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          experience: [experience],
          enhanceType: 'single_experience'
        }),
      });

      const data = await response.json();
      
      if (!response.ok || data.error) {
        throw new Error(data.error || 'An unknown error occurred.');
      }
      
      console.log('AI Response for experience enhancement:', data);
      
      // Update just this experience with enhanced content
      if (data.enhancedResume) {
        // For single experience enhancement, the AI returns just the experience object
        const enhancedExperience = data.enhancedResume;
        console.log('Enhanced experience:', enhancedExperience);
        setResumeData(prev => ({
          ...prev,
          experience: prev.experience.map((exp, index) => 
            index === experienceIndex ? enhancedExperience : exp
          )
        }));
        setAiResponse(`✅ Experience ${experienceIndex + 1} enhanced with ${selectedPersona} personality!`);
      } else {
        console.log('No enhanced data in response:', data);
        setAiResponse(`❌ No enhanced data received from AI`);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setAiResponse(`Error: ${errorMessage}`);
      console.error('Experience enhancement error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // AI Enhancement for modal experience (new experience being created)
  const enhanceModalExperience = async () => {
    setIsLoading(true);
    setAiResponse('');
    
    try {
      // Create a temporary experience object from the modal data
      const tempExperience = {
        name: newExperience.name,
        link: newExperience.link,
        blurb: newExperience.blurb,
        tenure: newExperience.tenure,
        jobs: [{
          title: newExperience.jobs[0]?.title || '',
          description: newExperience.jobs[0]?.description || '',
          skills: newExperience.jobs[0]?.skills || [],
          languages: newExperience.jobs[0]?.languages || []
        }]
      };

      // Send to AI for enhancement
      const url = selectedPersona === 'default' 
        ? '/api/hablo' 
        : `/api/hablo?persona=${selectedPersona}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          experience: [tempExperience],
          enhanceType: 'single_experience'
        }),
      });

      const data = await response.json();
      
      if (!response.ok || data.error) {
        throw new Error(data.error || 'An unknown error occurred.');
      }
      
      console.log('AI Response for modal experience enhancement:', data);
      
      // Update the modal experience with enhanced content
      if (data.enhancedResume) {
        const enhancedExperience = data.enhancedResume;
        console.log('Enhanced modal experience:', enhancedExperience);
        setNewExperience(enhancedExperience);
        setAiResponse(`✅ Experience enhanced with ${selectedPersona} personality!`);
      } else {
        console.log('No enhanced data in response:', data);
        setAiResponse(`❌ No enhanced data received from AI`);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setAiResponse(`Error: ${errorMessage}`);
      console.error('Modal experience enhancement error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Analyze job posting and tailor resume
  const analyzeJobPosting = async () => {
    if (!jobPostingText.trim()) {
      alert('Please paste a job posting first.');
      return;
    }

    setIsProcessingJobPosting(true);
    try {
      const response = await fetch('/api/hablo?persona=default', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentResume: resumeData,
          jobPosting: jobPostingText,
          enhanceType: 'job_posting_analysis'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.enhancedResume) {
        // Import the AI-generated resume data
        const tailoredResume = importJsonData(data.enhancedResume);
        setResumeData(tailoredResume);
        
        // Save to localStorage
        localStorage.setItem('resumeData', JSON.stringify(tailoredResume));
        
        // Close the modal
        setShowJobPostingModal(false);
        setJobPostingText('');
        
        alert('Resume successfully tailored to the job posting!');
      } else {
        throw new Error(data.error || 'Failed to analyze job posting');
      }
    } catch (error) {
      console.error('Job posting analysis error:', error);
      alert('Failed to analyze job posting. Please try again.');
    } finally {
      setIsProcessingJobPosting(false);
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
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`border-b transition-colors w-full ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="container-fluid py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <FileText className={`h-6 w-6 sm:h-8 sm:w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h1 className={`text-fluid-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Resume Generator
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <select 
                value={activeTemplate}
                onChange={(e) => setActiveTemplate(e.target.value)}
                className={`px-2 sm:px-3 py-1 sm:py-2 text-fluid-xs sm:text-fluid-sm rounded-md border transition-colors ${
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
                className="px-2 sm:px-4 py-1 sm:py-2 text-fluid-xs sm:text-fluid-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                title="Import JSON data from original CLI format"
              >
                Import JSON
              </button>
              <button
                onClick={exportToJSON}
                className="px-2 sm:px-4 py-1 sm:py-2 text-fluid-xs sm:text-fluid-sm font-medium text-green-600 hover:text-green-700 transition-colors"
              >
                Export JSON
              </button>
              <button
                onClick={exportToMarkdown}
                className="px-2 sm:px-4 py-1 sm:py-2 text-fluid-xs sm:text-fluid-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                Export Markdown
              </button>
              <button
                onClick={() => {
                  debugCurrentData();
                  alert('Check console for current data');
                }}
                className="px-2 sm:px-4 py-1 sm:py-2 text-fluid-xs sm:text-fluid-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                title="Debug: Show current data in console"
              >
                Debug Data
              </button>
              
              {/* Persona Selector */}
              <PersonaSelector 
                onPersonaChange={setSelectedPersona}
                currentPersona={selectedPersona}
              />
              
              <button
                onClick={handleHabloClick}
                disabled={isLoading}
                className={`px-2 sm:px-4 py-1 sm:py-2 text-fluid-sm sm:text-fluid-base font-semibold transition-colors ${
                  isLoading 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
                title="Enhance your resume with AI"
              >
                {isLoading ? 'Enhancing...' : 'AI Enhance'}
              </button>
              
              <button
                onClick={() => setShowJobPostingModal(true)}
                className="px-2 sm:px-4 py-1 sm:py-2 text-fluid-sm sm:text-fluid-base font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors"
                title="Tailor your resume to a specific job posting"
              >
                🎯 Job Match
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
                {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* AI Response Display */}
      {aiResponse && (
        <div className={`container-fluid py-4 ${
          darkMode ? 'bg-gray-800' : 'bg-blue-50'
        }`}>
          <div className={`p-4 rounded-lg border ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-blue-200 text-gray-800'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-fluid-sm font-semibold text-green-600 dark:text-green-400">Career Co-Pilot Response:</span>
            </div>
            <p className="text-fluid-sm leading-relaxed text-gray-700 dark:text-gray-200">{aiResponse}</p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container-fluid py-8">
        <div className="grid-fluid">
          {/* Form Section */}
          <div className={`space-y-4 sm:space-y-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-fluid-lg font-bold text-gray-900 dark:text-white">Personal Information</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className={`block text-fluid-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name
                  </label>
                  <input
                    value={resumeData.header.name}
                    onChange={(e) => updateResumeData('header.name', e.target.value)}
                    className={`w-full p-2 sm:p-3 text-fluid-sm rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Professional Title
                  </label>
                  <input
                    value={resumeData.header.tagline}
                    onChange={(e) => updateResumeData('header.tagline', e.target.value)}
                    className={`w-full p-3 text-sm rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="e.g., Full Stack Developer"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-blue-500" />
                  <h2 className="text-fluid-lg font-semibold">Experience</h2>
                </div>
                <button
                  onClick={addExperience}
                  className="flex items-center space-x-1 px-3 py-2 text-fluid-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Experience</span>
                </button>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className={`p-3 sm:p-4 border rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 gap-2">
                      <h3 className="font-medium text-fluid-sm">Experience {index + 1}</h3>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setEditingExperienceIndex(index);
                            setNewExperience(exp);
                            setShowAddExperienceModal(true);
                          }}
                          className="flex items-center space-x-1 text-blue-500 hover:text-blue-700 transition-colors"
                          title="AI Edit Experience"
                        >
                          <Pencil className="h-4 w-4" />
                          <span className="text-fluid-xs">AI Edit</span>
                        </button>
                        <button
                          onClick={() => removeExperience(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <input
                        value={exp.name}
                        onChange={(e) => updateResumeData(`experience[${index}].name`, e.target.value)}
                        placeholder="Company Name"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent text-fluid-sm ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={exp.tenure}
                        onChange={(e) => updateResumeData(`experience[${index}].tenure`, e.target.value)}
                        placeholder="2020 - Present"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent text-fluid-sm ${
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
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  <h2 className="text-fluid-lg font-semibold">Education</h2>
                </div>
                <button
                  onClick={addEducation}
                  className="flex items-center space-x-1 px-3 py-2 text-fluid-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Education</span>
                </button>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className={`p-3 sm:p-4 border rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 gap-2">
                      <h3 className="font-medium text-fluid-sm">Education {index + 1}</h3>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setEditingEducationIndex(index);
                            setNewEducation(edu); // Reusing newEducation for editing
                            setShowAddExperienceModal(true);
                          }}
                          className="flex items-center space-x-1 text-blue-500 hover:text-blue-700 transition-colors"
                          title="AI Edit Education"
                        >
                          <Pencil className="h-4 w-4" />
                          <span className="text-fluid-xs">AI Edit</span>
                        </button>
                        <button
                          onClick={() => removeEducation(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <input
                        value={edu.institution}
                        onChange={(e) => updateResumeData(`education[${index}].institution`, e.target.value)}
                        placeholder="Institution Name"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent text-fluid-sm ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={edu.year}
                        onChange={(e) => updateResumeData(`education[${index}].year`, e.target.value)}
                        placeholder="Graduation Year"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent text-fluid-sm ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={edu.degree}
                        onChange={(e) => updateResumeData(`education[${index}].degree`, e.target.value)}
                        placeholder="Degree"
                        className={`p-2 rounded border sm:col-span-2 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent text-fluid-sm ${
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
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  <h2 className={`text-fluid-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    ⚡ Skills
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setIsEditingSkills(true);
                    setShowAddExperienceModal(true);
                  }}
                  className="flex items-center space-x-1 text-blue-500 hover:text-blue-700 transition-colors"
                  title="AI Edit Skills"
                >
                  <Pencil className="h-4 w-4" />
                  <span className="text-fluid-xs">AI Edit</span>
                </button>
              </div>
              
              <textarea
                value={resumeData.skills.join(', ')}
                onChange={(e) => updateResumeData('skills', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                rows={3}
                placeholder="JavaScript, TypeScript, React, Node.js, Python..."
                className={`w-full p-2 sm:p-3 text-fluid-sm rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            {/* Extras Section */}
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-500" />
                  <h2 className={`text-fluid-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    🏆 Additional Information
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setNewExtras(resumeData.extras.join('\n'));
                    setIsEditingExtras(true);
                    setShowAddExperienceModal(true);
                  }}
                  className="flex items-center space-x-1 text-blue-500 hover:text-blue-700 transition-colors"
                  title="AI Edit Additional Information"
                >
                  <Pencil className="h-4 w-4" />
                  <span className="text-fluid-xs">AI Edit</span>
                </button>
              </div>
              
              <textarea
                value={resumeData.extras.join('\n')}
                onChange={(e) => updateResumeData('extras', e.target.value.split('\n').filter(Boolean))}
                rows={4}
                placeholder="Awards, certifications, projects, or other achievements..."
                className={`w-full p-2 sm:p-3 text-fluid-sm rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className={`p-4 sm:p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="mb-4">
                <h2 className={`text-fluid-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Live Preview
                </h2>
                <div className={`text-fluid-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Template: {activeTemplate.charAt(0).toUpperCase() + activeTemplate.slice(1)}
                </div>
              </div>
              
              {/* Resume Preview */}
              <div id="resume-preview" className={`bg-white text-gray-900 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg min-h-[600px] sm:min-h-[800px] ${
                activeTemplate === 'modern' ? 'border-l-4 border-blue-500' :
                activeTemplate === 'classic' ? 'border border-gray-300' :
                'shadow-none border border-gray-200'
              }`}>
                {/* Header */}
                <div className={`pb-4 sm:pb-6 mb-4 sm:mb-6 ${
                  activeTemplate === 'modern' ? 'border-b-2 border-blue-100' :
                  activeTemplate === 'classic' ? 'border-b border-gray-400' :
                  'border-b border-gray-200'
                }`}>
                  <h1 className={`text-fluid-2xl sm:text-fluid-3xl font-bold mb-2 sm:mb-3 ${
                    activeTemplate === 'modern' ? 'text-blue-600' :
                    activeTemplate === 'classic' ? 'text-gray-800' :
                    'text-gray-900'
                  }`}>
                    {resumeData.header?.name || 'Your Name'}
                  </h1>
                  <p className={`text-fluid-lg mb-3 sm:mb-4 italic ${
                    activeTemplate === 'modern' ? 'text-gray-600' :
                    'text-gray-700'
                  }`}>
                    {resumeData.header?.tagline || 'Your Professional Title'}
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 lg:gap-6 text-fluid-sm text-gray-600">
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

      {/* Add/Edit Modal */}
      {showAddExperienceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center z-50 p-4">
          <div className="relative p-4 sm:p-6 lg:p-8 bg-white border-2 border-blue-300 rounded-lg shadow-2xl w-full max-w-4xl max-h-full mx-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-fluid-xl sm:text-fluid-2xl lg:text-fluid-3xl font-bold text-black">
                {isEditingSkills ? 'Edit Skills' : 
                 isEditingExtras ? 'Edit Additional Information' :
                 editingEducationIndex !== null ? 'Edit Education' : 
                 editingExperienceIndex !== null ? 'Edit Experience' : 'Add New Experience'}
              </h3>
              <button onClick={cancelAddExperience} className="text-gray-700 hover:text-black p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            
            {/* Skills Editing */}
            {isEditingSkills && (
              <div className="space-y-4">
                <div>
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Skills</label>
                  <textarea
                    value={resumeData.skills.join(', ')}
                    onChange={(e) => updateResumeData('skills', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                    rows={6}
                    className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="JavaScript, TypeScript, React, Node.js, Python..."
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={cancelAddExperience}
                    className="px-4 py-2 text-fluid-base bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingSkills(false);
                      setShowAddExperienceModal(false);
                    }}
                    className="px-4 py-2 text-fluid-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Skills
                  </button>
                </div>
              </div>
            )}

            {/* Education Editing */}
            {editingEducationIndex !== null && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Institution</label>
                    <input
                      value={newEducation.institution}
                      onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                      className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                      placeholder="University Name"
                    />
                  </div>
                  <div>
                    <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Year</label>
                    <input
                      value={newEducation.year}
                      onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
                      className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                      placeholder="2020"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Degree</label>
                  <input
                    value={newEducation.degree}
                    onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                    className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={cancelAddExperience}
                    className="px-4 py-2 text-fluid-base bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      updateResumeData(`education[${editingEducationIndex}]`, newEducation);
                      setEditingEducationIndex(null);
                      setShowAddExperienceModal(false);
                    }}
                    className="px-4 py-2 text-fluid-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Education
                  </button>
                </div>
              </div>
            )}

            {/* Extras Editing */}
            {isEditingExtras && (
              <div className="space-y-4">
                <div>
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Additional Information</label>
                  <textarea
                    value={newExtras}
                    onChange={(e) => setNewExtras(e.target.value)}
                    rows={6}
                    className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="Awards, certifications, projects, or other achievements..."
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={cancelAddExperience}
                    className="px-4 py-2 text-fluid-base bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      updateResumeData('extras', newExtras.split('\n').filter(Boolean));
                      setIsEditingExtras(false);
                      setShowAddExperienceModal(false);
                    }}
                    className="px-4 py-2 text-fluid-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Additional Information
                  </button>
                </div>
              </div>
            )}

            {/* Experience Editing */}
            {editingExperienceIndex === null && editingEducationIndex === null && !isEditingSkills && !isEditingExtras && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Company Name</label>
                  <input
                    value={newExperience.name}
                    onChange={(e) => setNewExperience({ ...newExperience, name: e.target.value })}
                    className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Tenure</label>
                  <input
                    value={newExperience.tenure}
                    onChange={(e) => setNewExperience({ ...newExperience, tenure: e.target.value })}
                    className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="2020 - 2023"
                  />
                </div>
                <div>
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Job Title</label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      value={newExperience.jobs[0]?.title}
                      onChange={(e) => setNewExperience({ ...newExperience, jobs: [{ ...newExperience.jobs[0], title: e.target.value }] })}
                      className="flex-1 p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                      placeholder="Software Engineer"
                    />
                    <button
                      onClick={enhanceModalExperience}
                      disabled={isLoading}
                      className={`px-3 sm:px-4 py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-fluid-base sm:text-fluid-lg font-bold ${
                        isLoading 
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                      title="Generate with AI"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" x2="12" y1="19" y2="23"/>
                        <line x1="8" x2="16" y1="23" y2="23"/>
                      </svg>
                      {isLoading ? 'Processing...' : 'AI'}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Persona</label>
                  <select
                    value={selectedPersona}
                    onChange={(e) => setSelectedPersona(e.target.value)}
                    className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {Object.keys(personas).map((personaKey) => (
                      <option 
                        key={personaKey} 
                        value={personaKey}
                        className="text-fluid-base sm:text-fluid-lg"
                      >
                        {personas[personaKey]?.name || personaKey}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Skills</label>
                  <input
                    value={newExperience.jobs[0]?.skills.join(', ')}
                    onChange={(e) => setNewExperience({ ...newExperience, jobs: [{ ...newExperience.jobs[0], skills: e.target.value.split(',').map(s => s.trim()).filter(Boolean) }] })}
                    className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="React, Node.js, AWS..."
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">Description</label>
                  <textarea
                    value={newExperience.jobs[0]?.description}
                    onChange={(e) => setNewExperience({ ...newExperience, jobs: [{ ...newExperience.jobs[0], description: e.target.value }] })}
                    rows={6}
                    className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                    placeholder="Describe your role, achievements, and responsibilities..."
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={cancelAddExperience}
                className="px-4 sm:px-6 py-2 sm:py-3 text-fluid-base sm:text-fluid-lg font-bold text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveNewExperience}
                className="px-4 sm:px-6 py-2 sm:py-3 text-fluid-base sm:text-fluid-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingExperienceIndex !== null ? 'Update Experience' : 'Save Experience'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Job Posting Modal */}
      {showJobPostingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center z-50 p-4">
          <div className="relative p-4 sm:p-6 lg:p-8 bg-white border-2 border-green-300 rounded-lg shadow-2xl w-full max-w-4xl max-h-full mx-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-fluid-xl sm:text-fluid-2xl lg:text-fluid-3xl font-bold text-black">
                🎯 Job Posting Analysis
              </h3>
              <button 
                onClick={() => {
                  setShowJobPostingModal(false);
                  setJobPostingText('');
                }} 
                className="text-gray-700 hover:text-black p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-fluid-lg sm:text-fluid-xl font-bold mb-2 sm:mb-3 text-black">
                  Paste Job Posting
                </label>
                <textarea
                  value={jobPostingText}
                  onChange={(e) => setJobPostingText(e.target.value)}
                  rows={12}
                  className="w-full p-3 sm:p-4 text-fluid-base sm:text-fluid-lg rounded-lg border-2 border-gray-300 transition-colors focus:ring-4 focus:ring-green-500 focus:border-green-500 placeholder-gray-500"
                  placeholder="Paste the full job posting from Indeed, LinkedIn, or any job board here. Include the job title, requirements, responsibilities, and any other details..."
                />
              </div>
              
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <h4 className="text-fluid-lg font-bold text-blue-900 mb-2">💡 How it works:</h4>
                <ul className="text-fluid-sm text-blue-800 space-y-1">
                  <li>• AI analyzes the job posting for key requirements and keywords</li>
                  <li>• Compares with your current resume to identify relevant experience</li>
                  <li>• Tailors your resume to highlight matching skills and achievements</li>
                  <li>• Updates all sections to better align with the job requirements</li>
                  <li>• Automatically imports the optimized resume into all form fields</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={() => {
                  setShowJobPostingModal(false);
                  setJobPostingText('');
                }}
                className="px-4 sm:px-6 py-2 sm:py-3 text-fluid-base sm:text-fluid-lg font-bold text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={analyzeJobPosting}
                disabled={isProcessingJobPosting || !jobPostingText.trim()}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-fluid-base sm:text-fluid-lg font-bold text-white rounded-lg transition-colors ${
                  isProcessingJobPosting || !jobPostingText.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isProcessingJobPosting ? 'Analyzing...' : '🎯 Tailor Resume'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeGenerator; 