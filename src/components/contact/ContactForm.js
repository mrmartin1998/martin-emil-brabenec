'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="subject">
          <span className="label-text">Subject</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="message">
          <span className="label-text">Message</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered h-32"
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={status.type === 'loading'}>
        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      {status.message && (
        <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          <span>{status.message}</span>
        </div>
      )}
    </form>
  );
} 