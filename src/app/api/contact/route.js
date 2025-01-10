export async function POST(request) {
  try {
    const body = await request.json();
    
    // TODO: Add your email service integration here
    // Example: SendGrid, Nodemailer, etc.
    
    // For now, we'll just log the data
    console.log('Contact form submission:', body);

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ message: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 