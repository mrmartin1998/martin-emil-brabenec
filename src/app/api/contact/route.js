import { NextResponse } from 'next/server';
import { validateContact } from '@/lib/validations/contact';
import { sendEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validation = validateContact(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validation.errors },
        { status: 400 }
      );
    }

    // Send email notification
    await sendEmail(body);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
} 