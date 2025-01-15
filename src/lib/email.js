import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    // Use an "App Password" from Google Account settings, not your regular password
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendEmail(data) {
  const { name, email, subject, message } = data;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // You'll receive emails at the same address
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,
    html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<h3>Message:</h3>
<p>${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
} 