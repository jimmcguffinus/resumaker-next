// src/app/api/hablo/route.ts
import { NextResponse } from 'next/server';
import { loadPersonas, getPersonaResponse } from '../../../../lib/persona-loader';

// This tells Next.js to build this for Cloudflare's Edge network
export const runtime = 'edge';

// This line is crucial for serverless environments like Cloudflare
export const dynamic = 'force-dynamic';

// Handle both GET (for testing) and POST (for resume enhancement)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const persona = searchParams.get('persona') || 'default';

  // 1. Securely get the API key from server-side environment variables.
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('Gemini API key not found on the server.');
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  // Load personas and get the selected persona's response
  const personas = loadPersonas();
  const personaResponse = getPersonaResponse(persona, personas);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  
  const prompt = `
    You are 'Career Co-Pilot,' a friendly AI assistant with a ${persona} personality. A user has clicked a "Hablo!" button.
    
    Respond in the style of: ${personaResponse}
    
    Keep the entire response under 50 words and maintain the ${persona} personality throughout.
  `;

  try {
    // 2. The server makes the request to Google, not the browser.
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Google API Error:', errorBody);
      return NextResponse.json({ error: `Google API Error: ${errorBody.error.message}` }, { status: response.status });
    }

    const data = await response.json();
    const aiResponse = data.candidates[0]?.content?.parts[0]?.text;
    
    // 3. The server sends the clean result back to the browser.
    return NextResponse.json({ message: aiResponse });

  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ error: 'Failed to communicate with the AI service' }, { status: 500 });
  }
}

// New POST method to handle resume enhancement
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const persona = searchParams.get('persona') || 'default';

  // 1. Securely get the API key from server-side environment variables.
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('Gemini API key not found on the server.');
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  // Get the resume data from the request body
  const resumeData = await request.json();

  // Load personas and get the selected persona's response
  const personas = loadPersonas();
  const personaResponse = getPersonaResponse(persona, personas);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  
  // Check if this is a single experience enhancement
  const isSingleExperience = resumeData.enhanceType === 'single_experience';
  const isJobPostingAnalysis = resumeData.enhanceType === 'job_posting_analysis';
  
  const prompt = isJobPostingAnalysis ? `
    You are 'Career Co-Pilot,' an AI assistant with a ${persona} personality. Your job is to analyze a job posting and tailor a resume to match it perfectly.

    JOB POSTING:
    ${resumeData.jobPosting}

    CURRENT RESUME:
    ${JSON.stringify(resumeData.currentResume, null, 2)}

    Your task is to:
    1. Analyze the job posting for key requirements, skills, and keywords
    2. Identify relevant experience from the current resume
    3. Tailor the resume to highlight matching skills and achievements
    4. Rewrite experience descriptions to align with job requirements
    5. Update skills to prioritize job-relevant ones
    6. Adjust the overall tone and focus to match the job
    7. Generate a compelling cover letter that connects the candidate's experience to the job requirements (format the cover letter in Markdown with proper headers, bullet points, and formatting)

    IMPORTANT: You must return ONLY a valid JSON object that follows this exact JSON format schema (the format the importJsonData function expects):

    {
      "header": {
        "name": "string",
        "tagline": "string",
        "contactInfo": {
          "phoneNumber": {
            "areaCode": "string",
            "prefix": "string", 
            "suffix": "string"
          },
          "email": {
            "host": "string",
            "domain": "string"
          }
        },
        "location": {
          "city": "string",
          "state": {
            "name": "string"
          }
        }
      },
      "experience": {
        "workplaces": [
          {
            "name": "string",
            "link": "string",
            "blurb": "string",
            "tenure": {
              "start": "ISO date string",
              "end": "ISO date string"
            },
            "jobs": [
              {
                "title": "string",
                "description": "string",
                "skillsAndTools": ["string"],
                "langsAndLibs": {}
              }
            ]
          }
        ]
      },
      "education": {
        "certifcations": [
          {
            "instituion": "string",
            "link": "string",
            "awarded": "number",
            "proof": {
              "areaOfStudy": "string"
            }
          }
        ]
      },
      "extras": {
        "elements": [
          {
            "contentChunks": [
              {
                "text": "string"
              }
            ]
          }
        ]
      },
      "coverLetter": "string (Markdown formatted)"
    }

    Return ONLY the raw JSON object following this exact structure. No explanations, no markdown, no formatting.
  ` : isSingleExperience ? `
    You are 'Career Co-Pilot,' an AI assistant with a ${persona} personality. Your job is to enhance a single work experience entry.

    Current experience data: ${JSON.stringify(resumeData.experience[0], null, 2)}

    Please analyze and improve this single experience entry. Focus on:
    1. Making the job title more compelling and impactful
    2. Enhancing the job description to be more achievement-focused
    3. Improving the skills list to be more relevant and impressive
    4. Maintaining the ${persona} personality in your enhancements

    IMPORTANT: You must return ONLY a valid JSON object that follows this exact schema (the converted format the app uses):

    {
      "name": "string",
      "link": "string", 
      "blurb": "string",
      "tenure": "string",
      "jobs": [
        {
          "title": "string",
          "description": "string", 
          "skills": ["string"],
          "languages": []
        }
      ]
    }

    Return ONLY the raw JSON object following this exact structure. No explanations, no markdown, no formatting.
  ` : `
    You are 'Career Co-Pilot,' an AI assistant with a ${persona} personality. Your job is to enhance a resume.

    Current resume data: ${JSON.stringify(resumeData, null, 2)}

    Please analyze and improve this resume data. Focus on:
    1. Making the professional title more compelling
    2. Enhancing job descriptions to be more impactful
    3. Improving the overall presentation
    4. Maintaining the ${persona} personality in your enhancements

    IMPORTANT: You must return ONLY a valid JSON object that follows this exact JSON format schema (the format the importJsonData function expects):

    {
      "header": {
        "name": "string",
        "tagline": "string",
        "contactInfo": {
          "phoneNumber": {
            "areaCode": "string",
            "prefix": "string", 
            "suffix": "string"
          },
          "email": {
            "host": "string",
            "domain": "string"
          }
        },
        "location": {
          "city": "string",
          "state": {
            "name": "string"
          }
        }
      },
      "experience": {
        "workplaces": [
          {
            "name": "string",
            "link": "string",
            "blurb": "string",
            "tenure": {
              "start": "ISO date string",
              "end": "ISO date string"
            },
            "jobs": [
              {
                "title": "string",
                "description": "string",
                "skillsAndTools": ["string"],
                "langsAndLibs": {}
              }
            ]
          }
        ]
      },
      "education": {
        "certifcations": [
          {
            "instituion": "string",
            "link": "string",
            "awarded": "number",
            "proof": {
              "areaOfStudy": "string"
            }
          }
        ]
      },
      "extras": {
        "elements": [
          {
            "contentChunks": [
              {
                "text": "string"
              }
            ]
          }
        ]
      },
      "coverLetter": "string (Markdown formatted)"
    }

    Return ONLY the raw JSON object following this exact structure. No explanations, no markdown, no formatting.
  `;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Google API Error:', errorBody);
      return NextResponse.json({ error: `Google API Error: ${errorBody.error.message}` }, { status: response.status });
    }

    const data = await response.json();
    const aiResponse = data.candidates[0]?.content?.parts[0]?.text;
    
    // Try to parse the AI response as JSON
    try {
      const enhancedResumeData = JSON.parse(aiResponse);
      return NextResponse.json({ enhancedResume: enhancedResumeData });
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', parseError);
      console.error('AI Response was:', aiResponse);
      
      // Try to extract JSON from the response if it's wrapped in markdown or text
      try {
        // Look for JSON-like content between curly braces
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const extractedJson = JSON.parse(jsonMatch[0]);
          console.log('Successfully extracted JSON from response');
          return NextResponse.json({ enhancedResume: extractedJson });
        }
      } catch (extractError) {
        console.error('Failed to extract JSON from response:', extractError);
      }
      
      return NextResponse.json({ 
        error: 'AI response was not valid JSON',
        debug: {
          aiResponse: aiResponse,
          parseError: parseError instanceof Error ? parseError.message : String(parseError)
        }
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ error: 'Failed to communicate with the AI service' }, { status: 500 });
  }
} 