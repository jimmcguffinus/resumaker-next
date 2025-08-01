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
    <div className="flex items-center gap-2">
      <label htmlFor="persona-select" className="text-sm font-medium text-gray-700">
        AI Personality:
      </label>
      <select
        id="persona-select"
        value={currentPersona}
        onChange={(e) => onPersonaChange(e.target.value)}
        className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="default">Default</option>
        {Object.keys(personas).map((personaKey) => (
          <option key={personaKey} value={personaKey}>
            {personas[personaKey]?.name || personaKey}
          </option>
        ))}
      </select>
    </div>
  );
} 