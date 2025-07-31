// src/app/api/hablo/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Gemini API key not found in .env.local' }, { status: 500 });
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  const prompt = `
    You are 'Career Co-Pilot,' a friendly, encouraging, and highly capable AI assistant integrated into a resume builder application.
    A user has just clicked a test button labeled "Hablo!" which means "I speak!" in Spanish. They are testing the connection to you for the first time.
    Your task is to provide a brief, welcoming, and slightly playful response that accomplishes the following:
    1. Acknowledge the "Hablo!" button by responding in Spanish first, then providing an English translation.
    2. Introduce yourself as their Career Co-Pilot.
    3. Briefly and confidently state your purpose: to help them craft a standout resume by rewriting bullet points, generating summaries, and tailoring their application to job descriptions.
    4. Keep the tone encouraging and professional, but not robotic.
    5. End with a friendly and relevant emoji.
    6. Keep the entire response under 60 words.
  `;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });
    if (!response.ok) {
      const errorBody = await response.json();
      console.error('Google API Error:', errorBody);
      throw new Error(`Google API responded with status: ${response.status}`);
    }
    const data = await response.json();
    const aiResponse = data.candidates[0]?.content?.parts[0]?.text;
    return NextResponse.json({ message: aiResponse });
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({ error: 'Failed to communicate with the AI' }, { status: 500 });
  }
} 