import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

// Create Contact model inline since it's only used here
const Contact = mongoose.models.Contact || mongoose.model('Contact', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
}));

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    
    // Create new contact entry
    await Contact.create(body);
    
    // TODO: Add email notification service here
    console.log('Contact form submission:', body);

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 