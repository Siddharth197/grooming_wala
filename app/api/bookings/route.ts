import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function GET() {
  const isPlaceholder = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');
  
  if (isPlaceholder) {
    return NextResponse.json({ data: [] });
  }

  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase select failed:', error.message);
      return NextResponse.json({ data: [] });
    }

    return NextResponse.json({ data: data || [] });
  } catch (err) {
    console.warn('Supabase fetch error:', err);
    return NextResponse.json({ data: [] });
  }
}

export async function POST(request: Request) {
  const payload = await request.json();

  const isPlaceholder = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');
  
  if (!isPlaceholder) {
    try {
      const { error } = await supabase.from('appointments').insert([payload]);
      if (error) {
        console.warn('Supabase insert failed:', error.message);
        // Do not throw an error here, so the user is not blocked from WhatsApp booking!
      }
    } catch (err) {
      console.warn('Supabase connection error during insert:', err);
    }
  } else {
    console.info('Supabase is not configured (using placeholder). Skipping database write.');
  }

  // Always return success so the frontend successfully shows the WhatsApp booking button!
  return NextResponse.json({ status: 'success' }, { status: 201 });
}


