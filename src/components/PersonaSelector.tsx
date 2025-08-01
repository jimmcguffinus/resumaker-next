'use client';

import { useState, useEffect } from 'react';

interface Persona {
  name: string;
  speechPattern: string[];
  exampleResponses: string;
  professionalStyle: string[];
  keywords: string[];
}

interface PersonaSelectorProps {
  onPersonaChange: (persona: string) => void;
  currentPersona: string;
}

export default function PersonaSelector({ onPersonaChange, currentPersona }: PersonaSelectorProps) {
  const [personas, setPersonas] = useState<Record<string, Persona>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load personas from the API
    fetch('/api/personas')
      .then(res => res.json())
      .then(data => {
        setPersonas(data.personas);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading personas:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-sm text-gray-500">Loading personas...</div>;
  }

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="persona-select" className="text-sm font-bold text-black dark:text-white">
        AI Personality:
      </label>
      <div className="relative">
        <select
          id="persona-select"
          value={currentPersona}
          onChange={(e) => onPersonaChange(e.target.value)}
          className="appearance-none bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 text-blue-800 font-semibold rounded-lg px-4 py-2 pr-10 text-sm cursor-pointer transition-all duration-200 hover:from-blue-100 hover:to-blue-200 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:from-blue-900 dark:to-blue-800 dark:border-blue-600 dark:text-blue-200 dark:hover:from-blue-800 dark:hover:to-blue-700"
          style={{
            // Force dark text for dropdown options
            color: '#1e40af !important'
          }}
        >
          <option value="default" style={{ color: '#000000', backgroundColor: '#ffffff' }}>Default</option>
          {Object.keys(personas).map((personaKey) => (
            <option 
              key={personaKey} 
              value={personaKey}
              style={{ color: '#000000', backgroundColor: '#ffffff' }}
            >
              {personas[personaKey]?.name || personaKey}
            </option>
          ))}
        </select>
        {/* Custom arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
} 