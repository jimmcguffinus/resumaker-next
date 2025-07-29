'use client';

import React, { useState, useEffect } from 'react';
import { Download, Plus, Trash2, Moon, Sun, FileText, User, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import jsPDF from 'jspdf';

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

// Sample data
const sampleResume: Resume = {
  header: {
    name: "Alex Johnson",
    tagline: "Full Stack Software Engineer",
    contact: {
      phone: "(555) 123-4567",
      email: "alex.johnson@email.com"
    },
    location: {
      city: "San Francisco",
      state: "CA"
    }
  },
  experience: [
    {
      name: "TechCorp Inc.",
      link: "https://techcorp.com",
      blurb: "Leading technology company focused on cloud solutions",
      tenure: "2022 - Present",
      jobs: [
        {
          title: "Senior Software Engineer",
          description: "Led development of microservices architecture serving 1M+ users daily",
          skills: ["React", "Node.js", "AWS", "Docker"],
          languages: ["TypeScript", "Python", "Go"]
        }
      ]
    },
    {
      name: "StartupXYZ",
      link: "https://startupxyz.com",
      blurb: "Early-stage fintech startup",
      tenure: "2020 - 2022",
      jobs: [
        {
          title: "Full Stack Developer",
          description: "Built and deployed scalable web applications from scratch",
          skills: ["Vue.js", "Express", "PostgreSQL", "Redis"],
          languages: ["JavaScript", "Python"]
        }
      ]
    }
  ],
  education: [
    {
      institution: "Stanford University",
      link: "https://stanford.edu",
      year: "2020",
      degree: "B.S. Computer Science"
    }
  ],
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
  extras: ["Open source contributor to React ecosystem", "Speaker at tech conferences", "AWS Certified Solutions Architect"]
};

const ResumeGenerator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('modern');
  const [resumeData, setResumeData] = useState<Resume>(sampleResume);

  useEffect(() => {
    const saved = localStorage.getItem('resume-data');
    if (saved) {
      try {
        setResumeData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load saved data:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('resume-data', JSON.stringify(resumeData));
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

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Set font
    doc.setFont('helvetica');
    
    // Header
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(resumeData.header.name || 'Your Name', 20, 30);
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(resumeData.header.tagline || 'Your Professional Title', 20, 40);
    
    doc.setFontSize(10);
    doc.text(`${resumeData.header.contact.email} | ${resumeData.header.contact.phone} | ${resumeData.header.location.city}, ${resumeData.header.location.state}`, 20, 50);
    
    let yPosition = 70;
    
    // Experience
    if (resumeData.experience && resumeData.experience.length > 0) {
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Experience', 20, yPosition);
      yPosition += 10;
      
      resumeData.experience.forEach((exp, index) => {
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(exp.name, 20, yPosition);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(exp.tenure, 150, yPosition);
        yPosition += 5;
        
        if (exp.jobs?.[0]) {
          doc.text(exp.jobs[0].title, 20, yPosition);
          yPosition += 5;
          
          if (exp.jobs[0].description) {
            const lines = doc.splitTextToSize(exp.jobs[0].description, 170);
            doc.text(lines, 20, yPosition);
            yPosition += lines.length * 5;
          }
        }
        
        yPosition += 5;
      });
    }
    
    // Education
    if (resumeData.education && resumeData.education.length > 0) {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Education', 20, yPosition);
      yPosition += 10;
      
      resumeData.education.forEach((edu) => {
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(edu.institution, 20, yPosition);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(edu.year, 150, yPosition);
        yPosition += 5;
        
        doc.text(edu.degree, 20, yPosition);
        yPosition += 10;
      });
    }
    
    // Skills
    if (resumeData.skills && resumeData.skills.length > 0) {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Skills', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(resumeData.skills.join(', '), 20, yPosition);
      yPosition += 10;
    }
    
    // Extras
    if (resumeData.extras && resumeData.extras.length > 0) {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Additional Information', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      resumeData.extras.forEach((extra) => {
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(`• ${extra}`, 20, yPosition);
        yPosition += 5;
      });
    }
    
    doc.save('resume.pdf');
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(resumeData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.json';
    link.click();
  };

  const loadSampleData = () => {
    setResumeData(sampleResume);
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
                onClick={loadSampleData}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Load Sample
              </button>
              <button
                onClick={exportToJSON}
                className="px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
              >
                Export JSON
              </button>
              <button
                onClick={exportToPDF}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Export PDF</span>
              </button>
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
                <h2 className="text-xl font-semibold">Skills</h2>
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
                <h2 className="text-xl font-semibold">Additional Information</h2>
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
              <div className={`bg-white text-gray-900 p-8 rounded-lg shadow-lg min-h-[800px] ${
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
                  <h1 className={`text-3xl font-bold mb-2 ${
                    activeTemplate === 'modern' ? 'text-blue-600' :
                    activeTemplate === 'classic' ? 'text-gray-800' :
                    'text-gray-900'
                  }`}>
                    {resumeData.header?.name || 'Your Name'}
                  </h1>
                  <p className={`text-lg mb-4 ${
                    activeTemplate === 'modern' ? 'text-gray-600' :
                    'text-gray-700'
                  }`}>
                    {resumeData.header?.tagline || 'Your Professional Title'}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>{resumeData.header?.contact?.email}</span>
                    <span>{resumeData.header?.contact?.phone}</span>
                    <span>{resumeData.header?.location?.city}, {resumeData.header?.location?.state}</span>
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
                      Experience
                    </h2>
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{exp.name}</h3>
                            {exp.jobs?.[0] && (
                              <p className="text-gray-700">{exp.jobs[0].title}</p>
                            )}
                          </div>
                          <span className="text-sm text-gray-600">{exp.tenure}</span>
                        </div>
                        {exp.jobs?.[0]?.description && (
                          <p className="text-gray-700 text-sm mb-2">{exp.jobs[0].description}</p>
                        )}
                        {exp.jobs?.[0]?.skills && exp.jobs[0].skills.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {exp.jobs[0].skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`px-2 py-1 text-xs rounded ${
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
                      Education
                    </h2>
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="mb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{edu.institution}</h3>
                            <p className="text-gray-700">{edu.degree}</p>
                          </div>
                          <span className="text-sm text-gray-600">{edu.year}</span>
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
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-sm rounded-full ${
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

                {/* Extras */}
                {resumeData.extras && resumeData.extras.length > 0 && (
                  <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      Additional Information
                    </h2>
                    <ul className="space-y-2">
                      {resumeData.extras.map((extra, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="mr-2">•</span>
                          <span>{extra}</span>
                        </li>
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