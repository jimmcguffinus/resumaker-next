import fs from 'fs';
import path from 'path';

export interface Persona {
  name: string;
  speechPattern: string[];
  exampleResponses: string;
  professionalStyle: string[];
  keywords: string[];
}

export function loadPersonas(): Record<string, Persona> {
  const personasDir = path.join(process.cwd(), 'personas');
  const personas: Record<string, Persona> = {};

  try {
    const files = fs.readdirSync(personasDir);
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const personaName = file.replace('.md', '');
        const filePath = path.join(personasDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        personas[personaName] = parsePersonaMarkdown(content);
      }
    }
  } catch (error) {
    console.error('Error loading personas:', error);
  }

  return personas;
}

function parsePersonaMarkdown(content: string): Persona {
  const lines = content.split('\n');
  const persona: Persona = {
    name: '',
    speechPattern: [],
    exampleResponses: '',
    professionalStyle: [],
    keywords: []
  };

  let currentSection = '';
  
  for (const line of lines) {
    if (line.startsWith('## ')) {
      currentSection = line.replace('## ', '').toLowerCase();
    } else if (line.startsWith('### ')) {
      currentSection = line.replace('### ', '').toLowerCase();
    } else if (line.trim() && !line.startsWith('#')) {
      if (line.startsWith('- ')) {
        const item = line.replace('- ', '').trim();
        switch (currentSection) {
          case 'speech pattern':
            persona.speechPattern.push(item);
            break;
          case 'professional style':
            persona.professionalStyle.push(item);
            break;
          case 'keywords':
            persona.keywords.push(item);
            break;
        }
      } else if (currentSection === 'name') {
        persona.name = line.trim();
      } else if (currentSection === 'example responses') {
        persona.exampleResponses = line.trim();
      }
    }
  }

  return persona;
}

export function getPersonaResponse(personaName: string, personas: Record<string, Persona>): string {
  const persona = personas[personaName];
  if (!persona) {
    return "Hello! I'm your AI assistant, ready to help with your resume! 🚀";
  }
  
  return persona.exampleResponses;
} 