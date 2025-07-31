// src/app/api/hablo/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // 1. Securely get the API key from server-side environment variables.
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('Gemini API key not found on the server.');
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  
  const prompt = `
    You are 'Career Co-Pilot,' a friendly AI assistant. A user has clicked a "Hablo!" button.
    Respond with a brief, welcoming message in Spanish and English that introduces yourself
    and mentions you're ready to help with their resume. End with a rocket emoji.
    Keep the entire response under 50 words.
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