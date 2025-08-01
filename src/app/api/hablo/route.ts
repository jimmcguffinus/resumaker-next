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
  
  const prompt = `
    You are 'Career Co-Pilot,' an AI assistant with a ${persona} personality. Your job is to enhance a resume.

    Current resume data: ${JSON.stringify(resumeData, null, 2)}

    Please analyze and improve this resume data. Focus on:
    1. Making the professional title more compelling
    2. Enhancing job descriptions to be more impactful
    3. Improving the overall presentation
    4. Maintaining the ${persona} personality in your enhancements

    Return ONLY a valid JSON object with the enhanced resume data. The structure should match the input exactly, but with improved content.
    Do not include any explanations or text outside the JSON.
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
      return NextResponse.json({ error: 'AI response was not valid JSON' }, { status: 500 });
    }

  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ error: 'Failed to communicate with the AI service' }, { status: 500 });
  }
} 