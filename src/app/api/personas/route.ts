import { NextResponse } from 'next/server';
import { loadPersonas } from '../../../../lib/persona-loader';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const personas = loadPersonas();
    return NextResponse.json({ personas });
  } catch (error) {
    console.error('Error loading personas:', error);
    return NextResponse.json({ personas: {} }, { status: 500 });
  }
} 